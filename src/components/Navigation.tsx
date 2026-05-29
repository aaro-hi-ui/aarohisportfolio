import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 60);
      // Hide nav on scroll down (past hero), show on scroll up
      setIsVisible(currentY < prevScrollY || currentY < 100);
      setPrevScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Intersection observer for active section
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="group relative font-display text-xl font-bold"
            >
              <span className="text-gradient">AG</span>
              <span className="ml-2 text-foreground/90 group-hover:text-foreground transition-colors">/</span>
              <span className="ml-2 text-foreground/70 group-hover:text-foreground transition-colors text-sm font-medium">portfolio</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1_9dSgefsxiF_402_6ZaX2OcjCkLjoAoC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 hover:border-primary/60"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-xl border border-border/50 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute inset-x-0 top-0 p-6 pt-24 transition-all duration-300 ${
            isMobileOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-left px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                  activeSection === item.href
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-muted-foreground text-sm mr-3">0{i + 1}.</span>
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1_9dSgefsxiF_402_6ZaX2OcjCkLjoAoC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-semibold bg-primary/10 border border-primary/30 text-primary"
            >
              <Download className="w-5 h-5" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;