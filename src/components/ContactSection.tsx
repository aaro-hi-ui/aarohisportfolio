import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aarohigangwar999@gmail.com',
    href: 'mailto:aarohigangwar999@gmail.com',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7217579655',
    href: 'tel:+917217579655',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Greater Noida, India',
    href: null,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aaro-hi-ui',
    color: 'hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/5',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aarohi-gangwar-94a9a4276',
    color: 'hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:aarohigangwar999@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    toast({ title: 'Email Client Opened!', description: 'Your pre-filled message is ready to send.' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Please fill all required fields', variant: 'destructive' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: 'Invalid email address', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '';

    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Contact from ${formData.name}`,
            message: formData.message,
            from_name: 'Aarohi Gangwar Portfolio',
          }),
        });

        const data = await response.json();

        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          toast({ title: 'Message Sent!', description: 'Your message has been delivered to my inbox.' });
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        toast({
          title: 'Direct delivery failed',
          description: 'Attempting to open your email client instead...',
          variant: 'destructive',
        });
        triggerMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fall back to mailto if no API key is specified
      triggerMailtoFallback();
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              — Contact
            </span>
            <h2 className="section-heading text-gradient">Get In Touch</h2>
            <p className="mt-5 text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities, collaborations, and connecting with fellow developers.
              Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-3">Let's Build Something Together</h3>
                <p className="text-foreground/60 leading-relaxed">
                  Whether you're looking for an AI/ML developer, need a web application built, or just want to connect professionally —
                  I'd love to hear from you. Particularly interested in AI/ML, NLP, and full-stack web opportunities.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className={`glass-card rounded-2xl p-4 flex items-center gap-4 border ${info.border} transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    <div className={`p-3 rounded-xl ${info.bg} ${info.color} shrink-0`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-medium uppercase tracking-wide">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className={`font-semibold ${info.color} hover:underline text-sm`}>
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest mb-4">Find Me On</h4>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/60 text-foreground/60 text-sm font-semibold transition-all duration-200 ${s.color}`}
                    >
                      <s.icon className="w-4 h-4" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest mb-4">My Resume</h4>
                <a
                  href="https://drive.google.com/file/d/1_9dSgefsxiF_402_6ZaX2OcjCkLjoAoC/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold"
                >
                  View Resume →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-2xl p-8 border border-primary/15">
              <h3 className="text-xl font-bold font-display text-foreground mb-6">Send a Message</h3>

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 animate-glow-pulse">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Thank You!</h3>
                  <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
                    Your message has been processed successfully. I will review it and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-border/60 hover:border-primary/50 text-foreground/70 hover:text-foreground text-sm font-semibold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground/70 mb-2">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground/70 mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-foreground/70 mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground/70 mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/60 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-foreground/40 leading-relaxed">
                    {import.meta.env.VITE_WEB3FORMS_KEY 
                      ? 'Delivered directly using Web3Forms background API delivery.'
                      : 'Will open your pre-filled email client (or set VITE_WEB3FORMS_KEY in your environment for background direct delivery).'}
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;