import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:aarohigangwar999@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the pre-filled message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aarohigangwar999@gmail.com",
      href: "mailto:aarohigangwar999@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7217579655",
      href: "tel:+917217579655"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aaro-hi-ui",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aarohi-gangwar-94a9a4276",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and connecting with fellow developers. 
            Feel free to reach out if you'd like to discuss projects, opportunities, or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a developer, have a project in mind, or want to connect professionally, 
                I'd love to hear from you. I'm particularly interested in opportunities related to AI/ML, 
                web development, and collaborative projects.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`${social.color} transition-colors`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Resume</h4>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold">
                <a href="/Aarohi_Gangwar_Resume.pdf" download="Aarohi_Gangwar_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="card-gradient border-0 card-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className="w-full min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-light text-white font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  This form will open your default email client with a pre-filled message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;