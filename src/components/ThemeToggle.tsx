import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';

  const toggle = async () => {
    const next = isDark ? 'light' : 'dark';
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition || !btnRef.current) {
      setTheme(next);
      return;
    }

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(next);
    });

    try {
      await transition.ready;
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    } catch {
      // ignore
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="theme-toggle group"
    >
      <span className="relative w-4 h-4 flex items-center justify-center">
        {mounted ? (
          <>
            <Sun
              className={`absolute w-4 h-4 text-foreground transition-all duration-500 ${
                isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`}
            />
            <Moon
              className={`absolute w-4 h-4 text-foreground transition-all duration-500 ${
                isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
          </>
        ) : (
          <span className="w-4 h-4" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
