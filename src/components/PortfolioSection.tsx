import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Gamepad2, Users } from 'lucide-react';
import boxSiege from '@/assets/box-siege.jpg';

const technologies = ['Unity', 'C#', 'Steam'];
const tags = [
  { label: 'PvP', icon: Gamepad2 },
  { label: 'Co-Op', icon: Users },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs font-orbitron tracking-[0.4em] text-primary/80 mb-3">
            // PORTFOLIO
          </p>
          <h2 className="section-title text-foreground">
            Our <span className="gradient-text">Games</span>
          </h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            Crafted with passion. Explore the worlds we've built.
          </p>
        </div>

        {/* Cinematic Showcase */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <article className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-border bg-card shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.30)]">
            {/* 16:9 Hero Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={boxSiege}
                alt="Box Siege — 2D Action Platformer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Cinematic gradient overlay — stronger at bottom on desktop only */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/40 md:from-background md:via-background/60" />

              {/* Top meta bar */}
              <div className="absolute top-0 inset-x-0 p-3 md:p-5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border text-[10px] md:text-xs font-orbitron tracking-[0.15em] md:tracking-widest text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  FEATURED
                </span>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-primary-foreground text-[10px] md:text-xs font-orbitron tracking-[0.15em] md:tracking-widest">
                  PC · STEAM
                </span>
              </div>

              {/* Desktop overlay content (md+) */}
              <div className="hidden md:block absolute inset-x-0 bottom-0 p-5 lg:p-8">
                <div className="max-w-lg">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map(({ label, icon: Icon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-background/60 backdrop-blur-md border border-border text-foreground rounded-full font-medium"
                      >
                        <Icon size={12} className="text-secondary" />
                        {label}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-orbitron font-black mb-2 leading-none">
                    <span className="gradient-text">Box Siege</span>
                  </h3>

                  <p className="text-foreground/80 text-sm lg:text-base leading-relaxed max-w-lg mb-4">
                    A dynamic 2D action platformer with{' '}
                    <span className="text-foreground font-semibold">local cooperative PvP</span>.
                    Battle your friends, build the chaos, survive the siege — exclusively on Windows PC.
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://box-siege.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary font-orbitron text-sm tracking-wider"
                    >
                      <span className="inline-flex items-center gap-2">
                        Play Now
                        <ExternalLink size={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile content (below image, < md) */}
            <div className="md:hidden p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-muted border border-border text-foreground rounded-full font-medium"
                  >
                    <Icon size={11} className="text-secondary" />
                    {label}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl sm:text-4xl font-orbitron font-black mb-3 leading-tight">
                <span className="gradient-text">Box Siege</span>
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A dynamic 2D action platformer with{' '}
                <span className="text-foreground font-semibold">local cooperative PvP</span>.
                Battle your friends, build the chaos, survive the siege — exclusively on Windows PC.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://box-siege.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-orbitron text-xs sm:text-sm tracking-wider w-full sm:w-auto justify-center"
                >
                  <span className="inline-flex items-center gap-2">
                    Play Now
                    <ExternalLink size={14} />
                  </span>
                </a>
                <a
                  href="https://box-siege.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline font-orbitron text-xs sm:text-sm tracking-wider w-full sm:w-auto justify-center"
                >
                  Watch Trailer
                </a>
              </div>
            </div>


            {/* Tech strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 px-5 sm:px-6 md:px-6 py-2.5 sm:py-3 border-t border-border bg-background/50 backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-[10px] sm:text-xs font-orbitron tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground">
                  BUILT WITH
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-muted border border-border rounded-md text-[11px] sm:text-xs font-medium text-foreground tech-logo cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-orbitron tracking-[0.2em] sm:tracking-widest text-muted-foreground">
                <span><span className="text-secondary">2024</span> · RELEASED</span>
                <span><span className="text-accent">2D</span> · PLATFORMER</span>
              </div>
            </div>
          </article>

          {/* "More coming" teaser */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="text-center">
                  <p className="text-xs font-orbitron tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">
                    PROJECT 0{i + 1}
                  </p>
                  <p className="mt-2 text-2xl font-orbitron font-bold text-foreground/40">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
