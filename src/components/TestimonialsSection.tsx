import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      'Aarohi demonstrated exceptional problem-solving skills and a deep understanding of AI/ML concepts during our collaborative project. Her ability to implement NLP solutions from scratch is truly impressive.',
    name: 'Priya Sharma',
    role: 'Fellow B.Tech Student, Galgotias College',
    initials: 'PS',
    color: 'from-violet-500 to-purple-600',
  },
  {
    quote:
      'As Club Head of G-Media, Aarohi brought incredible energy and creativity to every event. She has a natural leadership ability and always makes sure every team member feels valued.',
    name: 'Rajan Verma',
    role: 'Club Member, G-Media Club',
    initials: 'RV',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    quote:
      'Her contributions to our GeeksforGeeks chapter were invaluable. Aarohi organized workshops that significantly improved participation and created a wonderful learning environment for all.',
    name: 'Anjali Gupta',
    role: 'GeeksforGeeks Chapter Coordinator',
    initials: 'AG',
    color: 'from-orange-500 to-rose-600',
  },
  {
    quote:
      'Aarohi has a rare combination of technical excellence and communication skills. Her code is clean, well-documented, and she explains complex concepts in a way everyone can understand.',
    name: 'Vikram Singh',
    role: 'Project Collaborator',
    initials: 'VS',
    color: 'from-green-500 to-teal-600',
  },
  {
    quote:
      'Working with Aarohi on the e-commerce project was a pleasure. She took initiative, met deadlines, and delivered a polished product with great attention to UX details.',
    name: 'Nisha Kapoor',
    role: 'Agile Team Member',
    initials: 'NK',
    color: 'from-pink-500 to-rose-600',
  },
  {
    quote:
      'Aarohi is one of the most dedicated students I know. Her passion for AI/ML is evident in every project she undertakes, and she continuously pushes herself to learn cutting-edge technologies.',
    name: 'Amit Yadav',
    role: 'Senior Peer Mentor',
    initials: 'AY',
    color: 'from-indigo-500 to-violet-600',
  },
];

const TestimonialsSection = () => {
  // Duplicate for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              — Testimonials
            </span>
            <h2 className="section-heading text-gradient">What Others Say</h2>
            <p className="mt-5 text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Feedback from peers, collaborators, and team members I've had the pleasure of working with.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrolling carousel — full width, no container */}
      <div className="relative overflow-hidden">
        {/* Left + right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, hsl(220 20% 12%), transparent)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, hsl(220 20% 12%), transparent)' }}
        />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-6" style={{ width: 'max-content' }}>
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 w-80 shrink-0 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 border border-border/30"
            >
              {/* Quote icon */}
              <div className="p-2 w-fit rounded-xl bg-primary/10">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              {/* Quote text */}
              <p className="text-sm text-foreground/70 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
