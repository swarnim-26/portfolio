import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and implementing modern CI/CD practices.",
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented microservices architecture"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built the entire product from ground up, working closely with design and product teams to deliver exceptional user experiences.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"],
      achievements: [
        "Launched MVP in 6 months",
        "Acquired 10K+ active users",
        "Reduced server costs by 30%"
      ]
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for various clients, focusing on performance and accessibility.",
      technologies: ["JavaScript", "React", "SASS", "WordPress", "MySQL"],
      achievements: [
        "Delivered 20+ client projects",
        "Improved page load times by 50%",
        "Achieved 100% accessibility scores"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-accent/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                />
                
                <Card className="ml-16 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl mb-1">{exp.position}</h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 + 0.7 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}