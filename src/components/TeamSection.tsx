import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';
import badutzy from '@/assets/BadutZY.jpg';
import swimmingfox from '@/assets/SwimmingFOX.jpg';
import ari8bit from '@/assets/Ari.jpg';

const teamMembers = [
  {
    name: 'BadutZY',
    role: 'Game Programmer',
    image: badutzy,
    github: 'https://github.com/BadutZY'
  },
  {
    name: 'SwimmingFox',
    role: 'Sprite Artist',
    image: swimmingfox,
    github: 'https://github.com/Marrwertz'
  },
  {
    name: 'Ari8Bit',
    role: 'Sound Designer',
    image: ari8bit,
    github: 'https://github.com/AriAja17'
  },
];

const TeamSection = () => {
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
    <section id="team" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title text-foreground">
            Meet The <span className="gradient-text">Team</span>
          </h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The passionate minds behind Equinox Interactive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 gradient-border rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-border team-member-img mx-auto"
                  />
                  
                  <div className="absolute inset-0 rounded-full bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Github className="text-foreground" size={32} />
                  </div>
                </a>
              </div>

              <h3 className="text-xl font-orbitron font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-medium mb-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
