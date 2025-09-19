import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/aarohi-profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Aarohi Gangwar
            </h1>
            <p className="text-xl lg:text-2xl text-accent-lighter mb-8 font-medium">
              AI/ML Specialist | Aspiring Developer
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
              A dedicated Computer Science student at Galgotias College of Engineering and Technology, 
              specialising in AI/ML (Graduating June 2026). Strong foundation in Java, Python, JavaScript, 
              and frameworks like Spring and Node.js. Experienced in developing practical projects, 
              leading creative communities, and contributing to coding events.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-6 text-lg primary-shadow hover:glow-shadow transition-all"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <Button 
                variant="ghost" 
                size="lg" 
                asChild
                className="text-white hover:text-accent-lighter hover:bg-white/10 p-3"
              >
                <a href="https://github.com/aaro-hi-ui" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                asChild
                className="text-white hover:text-accent-lighter hover:bg-white/10 p-3"
              >
                <a href="https://www.linkedin.com/in/aarohi-gangwar-94a9a4276" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                asChild
                className="text-white hover:text-accent-lighter hover:bg-white/10 p-3"
              >
                <a href="mailto:aarohigangwar999@gmail.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 slide-up">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden glow-shadow float">
                <img 
                  src={profileImage} 
                  alt="Aarohi Gangwar - AI/ML Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-accent-light/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-primary-light/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center fade-in">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="text-white hover:text-accent-lighter flex flex-col items-center gap-2 hover:bg-white/10"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;