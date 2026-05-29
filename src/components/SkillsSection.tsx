import { Code, Database, Globe, Wrench, Brain, Users, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Globe,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    skills: ['React', 'Node.js', 'Express.js', 'Spring Framework', 'Tailwind CSS'],
  },
  {
    title: 'AI / ML & Data',
    icon: Brain,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    skills: ['Machine Learning', 'Natural Language Processing', 'NLP', 'Data Structures', 'Algorithms', 'scikit-learn', 'NLTK'],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'REST APIs', 'Agile / Scrum'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Event Coordination', 'Mentorship'],
  },
];

const proficiencySkills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 80 },
  { name: 'NLP / Text Processing', level: 70 },
  { name: 'SQL & Databases', level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              — Technical Skills
            </span>
            <h2 className="section-heading text-gradient">Skills & Expertise</h2>
            <p className="mt-5 text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, tools, and technologies.
              Continuously learning and growing with the latest industry trends.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 80} direction="up">
              <div className={`glass-card rounded-2xl p-6 border ${cat.border} h-full transition-all duration-300 hover:-translate-y-1 group`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${cat.bg} ${cat.color} transition-all duration-300 group-hover:scale-110`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground font-display">{cat.title}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${cat.border} ${cat.bg} ${cat.color} transition-all duration-200 hover:-translate-y-0.5 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Proficiency bars */}
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-primary/10">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">Proficiency Overview</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {proficiencySkills.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 60}>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full animate-gradient-shift"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, hsl(263 70% 60%), hsl(186 100% 42%))',
                        }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Platform badges */}
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: 'LeetCode', desc: 'Competitive Programming', color: 'border-orange-500/30 bg-orange-500/5 text-orange-400' },
              { label: 'GeeksforGeeks', desc: 'Problem Solving', color: 'border-green-500/30 bg-green-500/5 text-green-400' },
              { label: 'GitHub', desc: 'Open Source', color: 'border-violet-500/30 bg-violet-500/5 text-violet-400' },
            ].map(p => (
              <div
                key={p.label}
                className={`px-6 py-3 rounded-2xl border ${p.color} text-center transition-all duration-200 hover:-translate-y-1`}
              >
                <p className="font-bold text-sm">{p.label}</p>
                <p className="text-xs opacity-70 mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;