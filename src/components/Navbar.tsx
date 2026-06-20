import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#portfolio', label: 'Games' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect border-b border-border' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        {/* MOBILE: flex justify-between (logo kiri, kontrol kanan) */}
        {/* DESKTOP (md+): grid 3 kolom 1fr | auto | 1fr -> kolom tengah selalu simetris */}
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          {/* KIRI: Logo */}
          <div className="flex items-center md:justify-start min-w-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 group min-w-0"
            >
              <img
                src={logo}
                alt="Equinox Interactive"
                className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-orbitron font-bold text-sm sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="sm:hidden">Equinox</span>
                <span className="hidden sm:inline">Equinox Interactive</span>
              </span>
            </a>
          </div>

          {/* TENGAH: Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-medium"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* KANAN: Theme toggle + Mobile button */}
          <div className="flex items-center gap-3 md:justify-end">
            <ThemeToggle />
            <button
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 ${
                isMenuOpen ? 'hamburger-active' : ''
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${isMenuOpen ? 'show' : ''}`}>
          <div className="py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-center font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
