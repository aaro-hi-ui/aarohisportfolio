import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/aaro-hi-ui', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aarohi-gangwar-94a9a4276', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aarohigangwar999@gmail.com', label: 'Email' },
  ];

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-card/50 border-t border-border/40 overflow-hidden">
      {/* Gradient line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-12 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-gradient">Aarohi Gangwar</h3>
            <p className="text-foreground/55 text-sm leading-relaxed max-w-xs">
              AI/ML Developer & Web Engineer. Building intelligent solutions and beautiful interfaces from Greater Noida, India.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-border/50 text-foreground/50 hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">Navigation</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left text-sm text-foreground/55 hover:text-primary transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact snapshot */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:aarohigangwar999@gmail.com" className="block text-sm text-foreground/55 hover:text-primary transition-colors">
                aarohigangwar999@gmail.com
              </a>
              <a href="tel:+917217579655" className="block text-sm text-foreground/55 hover:text-primary transition-colors">
                +91 7217579655
              </a>
              <p className="text-sm text-foreground/40">Greater Noida, Uttar Pradesh</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1_9dSgefsxiF_402_6ZaX2OcjCkLjoAoC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            © {year} Aarohi Gangwar · All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 text-foreground/50 hover:text-primary hover:border-primary/40 text-xs font-semibold transition-all duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;