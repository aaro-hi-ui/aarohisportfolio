import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Users, MapPin, Calendar, TrendingUp, Folder, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { label: 'CGPA', value: '7.93', suffix: '', icon: TrendingUp, color: 'text-violet-400' },
  { label: 'Projects', value: '7', suffix: '+', icon: Folder, color: 'text-cyan-400' },
  { label: 'Certificates', value: '2', suffix: '+', icon: Award, color: 'text-orange-400' },
  { label: 'Club Role', value: 'Head', suffix: '', icon: Trophy, color: 'text-pink-400' },
];

const education = [
  {
    degree: 'B.Tech in CSE (AI/ML)',
    institution: 'Galgotias College of Engineering and Technology',
    cgpa: '7.93',
    period: '2022 — 2026',
    location: 'Greater Noida, India',
    status: 'current',
  },
  {
    degree: 'High School (Class XII)',
    institution: 'St. Maria Goretti Inter College',
    cgpa: '8.46',
    period: '2020 — 2021',
    location: 'Bareilly, India',
    status: 'done',
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'St. Maria Goretti Inter College',
    cgpa: '9.02',
    period: '2018 — 2019',
    location: 'Bareilly, India',
    status: 'done',
  },
];

const activities = [
  {
    role: 'Club Head',
    organization: 'G-Media Club',
    period: 'Oct 2025 – Present',
    description:
      'Leading a creative community focused on media, design, and digital expression. Organizing collaborative projects and sessions to foster innovation and skill development among members.',
    color: 'border-violet-500/30 bg-violet-500/5',
    dot: 'bg-violet-400',
  },
  {
    role: 'Contributor',
    organization: 'GeeksforGeeks',
    period: 'Nov 2022 – Sept 2024',
    description:
      'Organized coding events, workshops, and peer-learning sessions to promote a collaborative tech culture. Coordinated hackathons, logistics, and outreach activities.',
    color: 'border-cyan-500/30 bg-cyan-500/5',
    dot: 'bg-cyan-400',
  },
];

const certificates = [
  {
    title: 'Database Management System',
    issuer: 'Infosys Springboard',
    date: 'Jan 2025',
    color: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
  },
  {
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    date: 'Nov 2024',
    color: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
  },
];

function CounterStat({ value, suffix, label, icon: Icon, color }: typeof stats[0]) {
  const [displayed, setDisplayed] = useState('0');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const num = parseFloat(value);
        if (isNaN(num)) { setDisplayed(value); observer.disconnect(); return; }
        let start = 0;
        const step = num / 30;
        const interval = setInterval(() => {
          start += step;
          if (start >= num) { setDisplayed(value); clearInterval(interval); }
          else setDisplayed(Number.isInteger(num) ? Math.floor(start).toString() : start.toFixed(2));
        }, 40);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1">
      <div className={`p-3 rounded-xl bg-card/50 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className={`text-3xl font-black font-display ${color}`}>
          {displayed}{suffix}
        </p>
        <p className="text-foreground/60 text-sm font-medium mt-1">{label}</p>
      </div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              — About Me
            </span>
            <h2 className="section-heading text-gradient">Background & Journey</h2>
            <p className="mt-5 text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Passionate about leveraging artificial intelligence and machine learning to solve real-world problems.
              Currently pursuing my degree while actively contributing to the tech community through leadership and collaboration.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <CounterStat {...stat} />
            </ScrollReveal>
          ))}
        </div>

        {/* Education Timeline */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="flex items-center gap-3 text-2xl font-bold font-display text-foreground mb-10">
              <div className="p-2 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <ScrollReveal key={i} delay={i * 120} direction="left">
                    <div className="flex gap-6 pl-14 relative">
                      {/* Timeline dot */}
                      <div className={`absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 ${
                        edu.status === 'current'
                          ? 'bg-primary border-primary animate-glow-pulse'
                          : 'bg-card border-border'
                      }`} />

                      <div className="glass-card rounded-2xl p-6 flex-1 transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div>
                            <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                            <p className="text-primary font-medium mt-1">{edu.institution}</p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-foreground/50">
                              <MapPin className="w-3.5 h-3.5" />
                              {edu.location}
                            </div>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                              CGPA: {edu.cgpa}
                            </span>
                            <div className="flex items-center gap-1.5 text-sm text-foreground/50">
                              <Calendar className="w-3.5 h-3.5" />
                              {edu.period}
                            </div>
                            {edu.status === 'current' && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                                ● Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Leadership & Activities */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="flex items-center gap-3 text-2xl font-bold font-display text-foreground mb-10">
              <div className="p-2 rounded-xl bg-accent/10">
                <Users className="w-6 h-6 text-accent" />
              </div>
              Leadership & Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, i) => (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className={`glass-card rounded-2xl p-6 border ${activity.color} h-full transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-3 rounded-full ${activity.dot} shrink-0`} />
                      <div>
                        <h4 className="font-bold text-foreground">{activity.role}</h4>
                        <p className="text-sm text-primary font-medium">{activity.organization}</p>
                      </div>
                      <span className="ml-auto text-xs text-foreground/50 shrink-0">{activity.period}</span>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed">{activity.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Certificates */}
        <ScrollReveal>
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold font-display text-foreground mb-10">
              <div className="p-2 rounded-xl bg-orange-500/10">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              Certificates
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className={`glass-card rounded-2xl p-6 border ${cert.color} transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${cert.bg} ${cert.text} mb-4`}>
                      Certified
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                    <p className={`font-semibold ${cert.text} mb-1`}>{cert.issuer}</p>
                    <p className="text-sm text-foreground/50">{cert.date}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;