import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import profileImage from '@/assets/aarohi-real-profile.jpg';

const roles = ['Web Developer', 'AI/ML Enthusiast', 'UI Engineer', 'Problem Solver'];

const techBadges = [
  { label: 'Python', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  { label: 'React', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { label: 'Java', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  { label: 'AI/ML', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
  { label: 'Node.js', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
  { label: 'NLP', color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    setDisplayText(currentRole.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(263 70% 80%) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(263 70% 80%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${[8, 12, 6, 16, 10, 7, 14, 9][i]}px`,
              height: `${[8, 12, 6, 16, 10, 7, 14, 9][i]}px`,
              left: `${[15, 75, 35, 85, 55, 25, 65, 45][i]}%`,
              top: `${[20, 60, 80, 30, 50, 70, 15, 45][i]}%`,
              background: i % 2 === 0
                ? 'hsl(263 70% 60%)'
                : 'hsl(186 100% 42%)',
              filter: 'blur(1px)',
            }}
          />
        ))}

        {/* Large soft glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left — Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Available for opportunities
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Greeting */}
            <div>
              <p className="text-foreground/70 text-lg font-medium mb-3">
                Hey there! I'm
              </p>
              <h1 className="font-display text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="text-foreground">Aarohi</span>
                <br />
                <span className="text-gradient">Gangwar</span>
              </h1>
            </div>

            {/* Role typewriter */}
            <div className="h-10 flex items-center gap-2">
              <span className="text-xl font-semibold text-foreground/60">I'm a</span>
              <span className="text-xl font-bold text-foreground">
                {displayText}
                <span className="animate-blink text-primary ml-0.5">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/60 text-lg leading-relaxed max-w-xl">
              Passionate CS student specializing in <span className="text-primary font-medium">AI/ML</span> at Galgotias College.
              Building intelligent solutions with Python, Java, React and modern frameworks.
              Currently working on NLP and Machine Learning projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gradient px-8 py-3.5 rounded-xl text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-xl border border-border/70 text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-primary/5 font-semibold text-sm transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: 'https://github.com/aaro-hi-ui', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/aarohi-gangwar-94a9a4276', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:aarohigangwar999@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-border/50 text-foreground/50 hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-scale-in">
              {/* Outer decorative ring (rotating) */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(263 70% 60%), hsl(186 100% 42%), transparent, hsl(263 70% 60%))',
                  padding: '2px',
                  margin: '-12px',
                }}
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full animate-glow-pulse bg-primary/20 blur-2xl scale-110" />

              {/* Profile image */}
              <div className="relative w-72 h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-background bg-zinc-950">
                <img
                  src={profileImage}
                  alt="Aarohi Gangwar — AI/ML Developer"
                  className="w-full h-full object-cover scale-[1.15] origin-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating tech badges */}
              {techBadges.map((badge, i) => {
                const angles = [0, 60, 120, 180, 240, 300];
                const angle = angles[i] * (Math.PI / 180);
                const radius = 170;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={badge.label}
                    className={`absolute px-3 py-1.5 rounded-full border text-xs font-semibold ${badge.color} animate-float`}
                    style={{
                      left: `calc(50% + ${x}px - 30px)`,
                      top: `calc(50% + ${y}px - 14px)`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.4}s`,
                    }}
                  >
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;