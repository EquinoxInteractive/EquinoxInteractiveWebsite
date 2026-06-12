import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
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
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        {/* video TARUH DI public/bg.mp4 */}
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-fade-in">
          <span className="gradient-text">Small Team.</span>
          <br />
          <span className="text-foreground">Big Dreams.</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
          Equinox Interactive is where game developers thrive bringing bold ideas to life and reshaping what games can be.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
          <button
            onClick={() => scrollToSection('#portfolio')}
            className="btn-primary font-orbitron"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-outline font-orbitron"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-foreground/50 hover:text-foreground transition-colors z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
