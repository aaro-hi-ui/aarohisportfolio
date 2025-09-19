import { GraduationCap, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in CSE (AI/ML)",
      institution: "Galgotias College of Engineering and Technology",
      cgpa: "7.93",
      graduation: "June 2026",
      location: "Greater Noida, India"
    },
    {
      degree: "High School",
      institution: "St. Maria Goretti Inter College",
      cgpa: "8.46",
      graduation: "March 2021",
      location: "Bareilly, India"
    },
    {
      degree: "Secondary School",
      institution: "St. Maria Goretti Inter College",
      cgpa: "9.02",
      graduation: "March 2019",
      location: "Bareilly, India"
    }
  ];

  const activities = [
    {
      role: "Club Head",
      organization: "G-Media Club",
      period: "Oct 2025 – Present",
      description: "Leading a creative community focused on media, design, and digital expression. Organizing collaborative projects and sessions to foster innovation and skill development.",
      icon: Users
    },
    {
      role: "Contributor",
      organization: "GeeksforGeeks",
      period: "Nov 2022 – Sept 2024",
      description: "Contributed to organizing coding events, workshops, and peer-learning sessions to promote a collaborative tech culture. Supported event coordination, logistics, and outreach for hackathons.",
      icon: Users
    }
  ];

  const certificates = [
    {
      title: "Database Management System",
      issuer: "Infosys",
      date: "Jan 2025"
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "Nov 2024"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
            Currently pursuing my degree while actively contributing to the tech community through leadership and collaboration.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16 slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-lg text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        CGPA: {edu.cgpa}
                      </div>
                      <p className="text-muted-foreground">{edu.graduation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-16 slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Users className="text-primary" />
            Leadership & Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <activity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{activity.role}</h4>
                      <p className="text-primary font-medium mb-2">{activity.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{activity.period}</p>
                      <p className="text-sm text-foreground leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="text-primary" />
            Certificates
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:primary-shadow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;