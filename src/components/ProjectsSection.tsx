import { ExternalLink, Github, Code, ShoppingCart, Brain, Globe, Smartphone, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "AventraMart – E-Commerce Website",
      description: "A comprehensive e-commerce platform featuring product filtering, cart management, and form validation. Built with modern web technologies and following agile development practices.",
      tech: ["HTML5", "CSS", "JavaScript"],
      features: ["Product Filtering", "Cart Management", "Form Validation", "Responsive Design", "Agile Collaboration"],
      period: "Nov 2024 - Feb 2025",
      status: "Completed",
      icon: ShoppingCart,
      github: "https://github.com/aaro-hi-ui/E-commerce-website"
    },
    {
      title: "AI-Based Text Processor",
      description: "An intelligent text processing tool leveraging NLP and machine learning techniques for grammar correction, content suggestions, and smart formatting to enhance productivity.",
      tech: ["Python", "NLP", "Machine Learning"],
      features: ["Grammar Correction", "Content Suggestions", "Smart Formatting", "AI Automation"],
      period: "May 2025 - Present",
      status: "In Development",
      icon: Brain,
      github: "https://github.com/aaro-hi-ui"
    }
  ];

  const repositories = [
    {
      name: "js-hindi",
      description: "JavaScript learning repository with Hindi explanations and practical examples",
      tech: ["JavaScript"],
      icon: Code,
      github: "https://github.com/aaro-hi-ui/js-hindi"
    },
    {
      name: "crypto-price-tracker",
      description: "Real-time cryptocurrency price tracking application using modern JavaScript",
      tech: ["JavaScript", "API", "CSS"],
      icon: Globe,
      github: "https://github.com/aaro-hi-ui/crypto-price-tracker"
    },
    {
      name: "Therapist-Website-Build",
      description: "Professional website build project showcasing TypeScript development skills",
      tech: ["TypeScript", "HTML", "CSS"],
      icon: Globe,
      github: "https://github.com/aaro-hi-ui/Therapist-Website-Build"
    },
    {
      name: "forage-midas",
      description: "Java project developed through Forage virtual internship experience",
      tech: ["Java"],
      icon: Code,
      github: "https://github.com/aaro-hi-ui/forage-midas"
    },
    {
      name: "aaro-hi-ui",
      description: "Personal UI experiments and portfolio components showcase",
      tech: ["React", "CSS", "JavaScript"],
      icon: Palette,
      github: "https://github.com/aaro-hi-ui/aaro-hi-ui"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";
  };

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development journey through practical projects and open-source contributions. 
            Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.status === "Completed" && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Repositories */}
        <div className="slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">GitHub Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <Card 
                key={index} 
                className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <repo.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{repo.name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={repo.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Repository
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <Card className="card-gradient border-0 primary-shadow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, and opportunities to contribute to meaningful work.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-white font-semibold px-8"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;