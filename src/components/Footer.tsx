import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aaro-hi-ui",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aarohi-gangwar-94a9a4276",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:aarohigangwar999@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Aarohi Gangwar</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              AI/ML Specialist and aspiring developer passionate about creating innovative solutions 
              through technology. Currently pursuing B.Tech in Computer Science with AI/ML specialization.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-white hover:text-accent-light hover:bg-white/10 p-2"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a 
                  href="mailto:aarohigangwar999@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  aarohigangwar999@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+917217579655"
                  className="hover:text-white transition-colors"
                >
                  +91 7217579655
                </a>
              </p>
              <p>Greater Noida, India</p>
            </div>
            <Button 
              asChild 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary mt-4"
            >
              <a href="/Aarohi_Gangwar_Resume.pdf" download="Aarohi_Gangwar_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/80">
            <p className="text-sm">
              © {currentYear} Aarohi Gangwar. All rights reserved.
            </p>
            <p className="text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;