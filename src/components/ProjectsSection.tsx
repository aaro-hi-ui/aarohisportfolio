import { useState } from 'react';
import { ExternalLink, Github, ShoppingCart, Brain, Code, Globe, Bot, Activity, FileText, Palette } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from './ScrollReveal';

type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  period: string;
  status: 'Completed' | 'In Development' | 'In Progress';
  icon: React.ElementType;
  github: string;
  live?: string;
  category: 'web' | 'ai' | 'tool';
  highlight?: boolean;
};

const projects: Project[] = [
  // ========== REAL AI / ML PROJECTS FROM GITHUB ==========
  {
    title: 'JD Match — AI Resume Scorer',
    description:
      'One page. One LLM call. Paste your resume and a job description — instantly get a fit score, top strengths, top skill gaps, and 3 concrete bullet rewrites. Returns results in under 10 seconds using Gemini.',
    tech: ['Python', 'Gemini LLM', 'LLM', 'Pydantic', 'NLP'],
    features: ['Fit Score', 'Strength Analysis', 'Skill Gap Detection', 'Bullet Rewrite Suggestions', 'Instant Results'],
    period: 'May 2026',
    status: 'Completed',
    icon: FileText,
    github: 'https://github.com/aaro-hi-ui/JD_Match',
    category: 'ai',
    highlight: true,
  },
  {
    title: 'ShopAssist — AI Customer Support Agent',
    description:
      'A full AI customer-support agent for a Shopify-style store. Demonstrates Gemini function calling, Pydantic-validated structured I/O, multi-turn memory, and a live tool-call trace panel to watch the agent think in real time.',
    tech: ['Python', 'Gemini', 'Function Calling', 'Pydantic', 'Multi-turn AI'],
    features: ['Gemini Function Calling', 'Multi-turn Memory', 'Live Tool-call Trace', 'Structured I/O', 'Shopify Store Agent'],
    period: 'May 2026',
    status: 'Completed',
    icon: Bot,
    github: 'https://github.com/aaro-hi-ui/ShopAssist',
    category: 'ai',
    highlight: true,
  },
  {
    title: 'AI-Based Text Processor',
    description:
      'Leverages NLP and Machine Learning to automate analysis and manipulation of textual data. Bridges raw text to actionable insights through grammar correction, summarization, content suggestions, and smart formatting.',
    tech: ['JavaScript', 'NLP', 'Machine Learning', 'Python'],
    features: ['Grammar Correction', 'Text Summarization', 'Content Suggestions', 'Smart Formatting', 'Actionable Insights'],
    period: 'May 2026',
    status: 'Completed',
    icon: Brain,
    github: 'https://github.com/aaro-hi-ui/AI-based-Text-processor',
    live: 'https://tomzxcode.github.io/ai-text-editor/',
    category: 'ai',
    highlight: true,
  },
  {
    title: 'Jiva Health Dashboard',
    description:
      'A modern health analytics dashboard built with TypeScript. Visualizes personal health metrics with clean charts and an intuitive UI focused on user wellness insights and tracking.',
    tech: ['TypeScript', 'React', 'Health Analytics', 'Dashboard'],
    features: ['Health Metrics', 'Data Visualization', 'Analytics Dashboard', 'Responsive UI', 'Wellness Insights'],
    period: 'May 2026',
    status: 'Completed',
    icon: Activity,
    github: 'https://github.com/aaro-hi-ui/jiva-health-dashboard',
    category: 'ai',
  },
  // ========== WEB PROJECTS ==========
  {
    title: 'AventraMart – E-Commerce Platform',
    description:
      'A comprehensive e-commerce platform featuring product filtering, cart management, and form validation. Built with modern web technologies following agile development practices.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: ['Product Filtering', 'Cart Management', 'Form Validation', 'Responsive UI', 'Agile Development'],
    period: 'Nov 2024 – Feb 2025',
    status: 'Completed',
    icon: ShoppingCart,
    github: 'https://github.com/aaro-hi-ui/E-commerce-website',
    category: 'web',
    highlight: true,
  },
  {
    title: 'Crypto Price Tracker',
    description:
      'Real-time cryptocurrency price tracking application using modern JavaScript and public crypto APIs. Features live price updates, search, and sorting by market cap.',
    tech: ['JavaScript', 'REST API', 'CSS3', 'Async/Await'],
    features: ['Real-time Prices', 'Live Updates', 'Search & Filter', 'Market Cap Sorting', 'Responsive Design'],
    period: '2024',
    status: 'Completed',
    icon: Globe,
    github: 'https://github.com/aaro-hi-ui/crypto-price-tracker',
    category: 'web',
  },
  {
    title: 'Therapist Website Build',
    description:
      'A professional, accessible therapist business website built with TypeScript and modern HTML/CSS. Features appointment scheduling UI, testimonials, and service listings.',
    tech: ['TypeScript', 'HTML5', 'CSS3', 'Accessibility'],
    features: ['Appointment UI', 'Service Listings', 'Testimonials', 'Accessibility', 'Responsive Layout'],
    period: '2024',
    status: 'Completed',
    icon: Globe,
    github: 'https://github.com/aaro-hi-ui/Therapist-Website-Build',
    category: 'web',
  },
  {
    title: 'JavaScript Learning Repository (Hindi)',
    description:
      'A curated JavaScript learning repository with Hindi explanations, code examples, and practical exercises. Aimed at making JS accessible to Hindi-speaking developers.',
    tech: ['JavaScript', 'Documentation', 'Educational'],
    features: ['Hindi Explanations', 'Code Examples', 'Practical Exercises', 'Beginner Friendly', 'Structured Curriculum'],
    period: '2023',
    status: 'Completed',
    icon: Code,
    github: 'https://github.com/aaro-hi-ui/js-hindi',
    category: 'tool',
  },
  {
    title: 'Java Forage – MIDAS Virtual Experience',
    description:
      'Java development project completed through Forage virtual internship (JPMorgan Chase MIDAS). Implemented backend features and algorithmic solutions in a professional codebase.',
    tech: ['Java', 'Spring', 'OOP', 'Algorithms'],
    features: ['Backend Development', 'OOP Design', 'Algorithm Implementation', 'Code Review', 'Professional Standards'],
    period: '2023',
    status: 'Completed',
    icon: Code,
    github: 'https://github.com/aaro-hi-ui/forage-midas',
    category: 'tool',
  },
  {
    title: 'UI Components Showcase',
    description:
      'Personal UI experiments and reusable component library. A playground for exploring modern CSS techniques, React patterns, and creative interface designs.',
    tech: ['React', 'CSS3', 'JavaScript', 'Animations'],
    features: ['Reusable Components', 'Animation Library', 'Dark Mode', 'CSS Experiments', 'Open Source'],
    period: '2023 – Present',
    status: 'In Progress',
    icon: Palette,
    github: 'https://github.com/aaro-hi-ui/aaro-hi-ui',
    category: 'tool',
  },
];

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: '🤖 AI / ML' },
  { id: 'web', label: '🌐 Web' },
  { id: 'tool', label: '🛠 Tools' },
] as const;

const statusColors = {
  Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
  'In Development': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'In Progress': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'tool'>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              — Projects
            </span>
            <h2 className="section-heading text-gradient">Featured Work</h2>
            <p className="mt-5 text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Showcasing my development journey through AI/ML projects, web applications, and open-source contributions.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'border border-border/60 text-foreground/60 hover:text-foreground hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 60}>
              <div
                className={`glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 group ${
                  project.highlight
                    ? 'border-primary/25 ring-1 ring-primary/10'
                    : 'border-border/30'
                }`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      project.category === 'ai'
                        ? 'bg-violet-500/10 text-violet-400'
                        : project.category === 'web'
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'bg-orange-500/10 text-orange-400'
                    }`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">
                        {project.category === 'ai' ? 'AI / ML' : project.category === 'web' ? 'Web' : 'Tool'}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border shrink-0 ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Period */}
                <p className="text-xs text-foreground/40 mb-3">{project.period}</p>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map(t => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs bg-muted/50 text-foreground/60 border-0"
                    >
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50 text-foreground/40 border-0">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/60 text-foreground/70 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 text-sm font-semibold transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-sm font-semibold transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-10 border border-primary/15 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-display text-gradient mb-3">Interested in Collaboration?</h3>
              <p className="text-foreground/60 mb-6">
                I'm always open to discussing new projects, creative ideas, and opportunities to build meaningful things together.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gradient px-8 py-3.5 rounded-xl text-white font-semibold"
              >
                Let's Connect →
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;