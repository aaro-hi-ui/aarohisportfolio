import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/aarohi-real-profile.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 hero-gradient relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Browser-like Container */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl browser-shadow overflow-hidden fade-in">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500 text-center max-w-md mx-auto">
                  aarohi-gangwar.dev
                </div>
              </div>
              <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="px-8 lg:px-16 py-12 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="space-y-8 slide-up">
                  {/* Greeting */}
                  <div className="flex items-center gap-2 text-lg text-gray-600">
                    <span>Hey, I'm Aarohi</span>
                    <span className="text-2xl">👋</span>
                  </div>

                  {/* Main Title */}
                  <div className="space-y-2">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-primary">AI/ML</span>
                      <br />
                      <span className="text-gray-900">Specialist</span>
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    I'm a dedicated Computer Science student specializing in AI/ML at Galgotias College. 
                    I help build innovative solutions using Python, Java, JavaScript, and modern frameworks.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-6 text-base rounded-lg"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get In Touch
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-6 text-base rounded-lg"
                      onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Browse Projects
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-3 rounded-lg"
                    >
                      <a href="https://github.com/aaro-hi-ui" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-3 rounded-lg"
                    >
                      <a href="https://www.linkedin.com/in/aarohi-gangwar-94a9a4276" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-3 rounded-lg"
                    >
                      <a href="mailto:aarohigangwar999@gmail.com">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="flex justify-center lg:justify-end slide-up" style={{ animationDelay: '200ms' }}>
                  <div className="relative">
                    {/* Main Profile Circle */}
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={profileImage} 
                        alt="Aarohi Gangwar - AI/ML Specialist"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative outer ring */}
                    <div className="absolute -inset-6 rounded-full border-2 border-primary/20"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                      AI
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold float">
                      ML
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center fade-in">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="text-white/80 hover:text-white flex flex-col items-center gap-2 hover:bg-white/10 rounded-lg"
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