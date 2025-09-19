import { Code, Database, Globe, Wrench, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 75 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: [
        { name: "Spring Framework", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "React", level: 70 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "AI/ML & Technologies",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Natural Language Processing", level: 70 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "Agile Methodology", level: 80 },
        { name: "API Development", level: 75 },
        { name: "Responsive Design", level: 85 },
        { name: "Web Development", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Leadership", level: 80 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-accent";
    return "bg-primary-light";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with. 
            Continuously learning and improving to stay current with industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Achievement Section */}
        <div className="mt-16 text-center slide-up">
          <Card className="card-gradient border-0 primary-shadow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Problem Solving Expertise</h3>
              <p className="text-muted-foreground mb-4">
                Active problem solver with experience on competitive programming platforms
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-primary font-semibold">LeetCode</span>
                </div>
                <div className="bg-accent/10 px-4 py-2 rounded-lg">
                  <span className="text-accent font-semibold">Java Specialization</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;