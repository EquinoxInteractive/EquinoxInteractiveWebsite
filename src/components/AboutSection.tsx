import { useEffect, useRef, useState } from 'react';
import teamImage from '@/assets/Team.png';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title text-foreground">
            About Our <span className="gradient-text">Studio</span>
          </h2>
          <div className="section-underline" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Story */}
          <div
            className={`flex-1 space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-semibold gradient-text">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Equinox Interactive Started in{' '}
                <span className="text-foreground font-semibold">
                  April 2025
                </span>{' '}
                with our first project,
                <span className="text-primary font-semibold">
                  {' '}
                  "Box Siege"
                </span>
                . What began as a simple idea has grown into something
                we're truly proud of.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With{' '}
                <span className="text-foreground font-semibold">
                  3 core members
                </span>
                , we may be small, but we're driven by passion and a
                shared vision to create games that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We started as a simple school project soon grew into something more Equinox Interactive emerged with a clear ambition: to build games that are not only polished and purposeful, but also fresh and original.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-semibold gradient-text">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a creative hub for game developers to bring bold, imaginative ideas to life
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-semibold gradient-text">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To challenge the monotony of mainstream gaming by delivering original and meaningful experiences.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex-1 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* 👇 pembatas ukuran khusus desktop */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-sm xl:max-w-xs">
              <div className="absolute inset-0 gradient-border rounded-2xl blur-xl opacity-30" />
              <img
                src={teamImage}
                alt="Equinox Interactive Team"
                className="relative w-full rounded-2xl border-2 border-border shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
