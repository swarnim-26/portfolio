import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, Mail, Phone, Star, Award, Target, Code, Database, Globe, Server, BookOpen, Cpu, Users } from 'lucide-react';
import { SectionType } from '../App';
import { useState } from 'react';

interface DetailedViewProps {
  section: SectionType;
  onBack: () => void;
}

export function DetailedView({ section, onBack }: DetailedViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sectionContent = {
    about: {
      title: "About Swarnim Tiwari",
      content: (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl mb-6">Professional Overview</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a dedicated full-stack developer from India with a passion for creating 
                  innovative digital solutions. My journey in programming began with curiosity 
                  about how technology works and has evolved into comprehensive expertise across 
                  multiple programming languages and frameworks.
                </p>
                <p>
                  Based in India, I bring a unique perspective to development projects, combining 
                  technical excellence with creative problem-solving approaches. I specialize in 
                  writing clean, efficient, and maintainable code that scales well and performs optimally.
                </p>
                <p>
                  Beyond coding, I actively contribute to the developer community through open-source 
                  projects, knowledge sharing, and mentoring aspiring programmers. I believe in 
                  continuous learning and staying updated with emerging technologies.
                </p>
                <p>
                  My development philosophy centers around user-focused design, performance optimization, 
                  and creating solutions that make a meaningful impact. I enjoy tackling complex challenges 
                  and transforming ideas into functional, elegant applications.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h4 className="mb-4">Professional Highlights</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-primary" />
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-3 text-primary" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-primary" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-3 text-primary" />
                    <span>Self-taught with formal practices</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-3 text-primary" />
                    <span>Quality-focused development</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-primary" />
                    <span>Open to remote collaboration</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h4 className="mb-4">Core Values</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Clean Code</p>
                    <p className="text-muted-foreground">Writing maintainable and readable code</p>
                  </div>
                  <div>
                    <p className="font-medium">Continuous Learning</p>
                    <p className="text-muted-foreground">Staying current with technology trends</p>
                  </div>
                  <div>
                    <p className="font-medium">User Experience</p>
                    <p className="text-muted-foreground">Creating intuitive and accessible interfaces</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      )
    },
    skills: {
      title: "Technical Skills & Expertise",
      content: (
        <div className="space-y-8">
          {[
            {
              category: "Programming Languages",
              icon: Code,
              skills: [
                { 
                  name: "Python", 
                  level: 90, 
                  description: "Web development with Django/Flask, automation scripts, data analysis, API development",
                  experience: "3+ years"
                },
                { 
                  name: "Java", 
                  level: 85, 
                  description: "Object-oriented programming, desktop applications, enterprise solutions, Spring framework",
                  experience: "2+ years"
                },
                { 
                  name: "JavaScript", 
                  level: 88, 
                  description: "Frontend & backend development, ES6+, async programming, modern frameworks",
                  experience: "3+ years"
                }
              ]
            },
            {
              category: "Web Technologies",
              icon: Globe,
              skills: [
                { 
                  name: "HTML5", 
                  level: 95, 
                  description: "Semantic markup, accessibility standards, modern HTML features, SEO optimization",
                  experience: "4+ years"
                },
                { 
                  name: "CSS3", 
                  level: 90, 
                  description: "Responsive design, animations, CSS Grid & Flexbox, preprocessors, modern layouts",
                  experience: "4+ years"
                }
              ]
            },
            {
              category: "Development Tools & Frameworks",
              icon: Server,
              skills: [
                { 
                  name: "React.js", 
                  level: 82, 
                  description: "Component-based development, hooks, state management, modern React patterns" 
                },
                { 
                  name: "Node.js", 
                  level: 80, 
                  description: "Server-side JavaScript, API development, npm ecosystem, real-time applications" 
                },
                { 
                  name: "Git", 
                  level: 88, 
                  description: "Version control, collaborative development, branching strategies, code review" 
                }
              ]
            },
            {
              category: "Database Technologies",
              icon: Database,
              skills: [
                { 
                  name: "MySQL", 
                  level: 85, 
                  description: "Relational database design, query optimization, data modeling" 
                },
                { 
                  name: "MongoDB", 
                  level: 75, 
                  description: "NoSQL database operations, document-based storage, aggregation pipelines" 
                }
              ]
            }
          ].map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <category.icon className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl">{category.category}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="flex gap-2">
                          {skill.experience && (
                            <Badge variant="outline" className="text-xs">{skill.experience}</Badge>
                          )}
                          <Badge variant="secondary">{skill.level}%</Badge>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Additional Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Development Practices</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Agile development methodology</p>
                    <p>• Test-driven development (TDD)</p>
                    <p>• Code review and quality assurance</p>
                    <p>• Performance optimization</p>
                    <p>• Security best practices</p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">Soft Skills</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Problem-solving and analytical thinking</p>
                    <p>• Project management and planning</p>
                    <p>• Client communication and consultation</p>
                    <p>• Technical documentation</p>
                    <p>• Team collaboration and mentoring</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )
    },
    projects: {
      title: "Featured Projects & Portfolio",
      content: (
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              title: "E-Learning Management System",
              description: "Comprehensive online learning platform built with Python Django and JavaScript. Features include course management, video streaming, progress tracking, quiz system, and user authentication with role-based access control.",
              technologies: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "PostgreSQL", "Redis"],
              status: "Completed",
              features: ["User Authentication", "Video Streaming", "Progress Tracking", "Quiz System", "Admin Dashboard"],
              link: "#"
            },
            {
              title: "Enterprise Task Management System",
              description: "Java-based desktop application for project management featuring team collaboration, real-time updates, task assignment, deadline tracking, and comprehensive reporting with data visualization.",
              technologies: ["Java", "Swing", "MySQL", "Maven", "JUnit"],
              status: "In Production",
              features: ["Team Collaboration", "Real-time Updates", "Task Assignment", "Reporting Dashboard", "File Management"],
              link: "#"
            },
            {
              title: "Weather Analytics Dashboard",
              description: "Interactive weather application using vanilla JavaScript with API integration. Provides real-time weather data, historical analysis, forecasting, location-based services, and responsive design.",
              technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Chart.js", "LocalStorage"],
              status: "Live Demo",
              features: ["Real-time Data", "Historical Analysis", "Location Services", "Data Visualization", "Responsive Design"],
              link: "#"
            },
            {
              title: "Smart Inventory Management",
              description: "Python Flask-based inventory system for small to medium businesses. Includes automated stock tracking, low-stock alerts, supplier management, sales analytics, and comprehensive reporting.",
              technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
              status: "Production Ready",
              features: ["Stock Tracking", "Alert System", "Supplier Management", "Sales Analytics", "Report Generation"],
              link: "#"
            },
            {
              title: "Personal Finance Tracker",
              description: "Web-based personal finance management tool built with modern JavaScript. Features expense tracking, budget planning, financial goal setting, and insightful spending analytics with visual reports.",
              technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Chart.js", "Bootstrap"],
              status: "Beta Testing",
              features: ["Expense Tracking", "Budget Planning", "Goal Setting", "Analytics", "Data Export"],
              link: "#"
            },
            {
              title: "Real Estate Portal",
              description: "Full-stack real estate platform connecting buyers, sellers, and agents. Includes property listings, search functionality, user profiles, messaging system, and administrative tools for property management.",
              technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "HTML5", "CSS3"],
              status: "Development",
              features: ["Property Listings", "Advanced Search", "User Profiles", "Messaging System", "Admin Tools"],
              link: "#"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <Badge 
                    variant={
                      project.status === 'Completed' || project.status === 'Live Demo' || project.status === 'Production Ready' ? 'default' : 
                      project.status === 'In Production' ? 'secondary' : 'outline'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Key Features:</h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {project.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-muted-foreground">
                        <Star className="h-3 w-3 mr-1 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    },
    experience: {
      title: "Learning Journey & Development Path",
      content: (
        <div className="space-y-8">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">Self-Directed Learning & Skill Development</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2021 - Present</span>
                    </div>
                    <Badge variant="outline">Educational Journey</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Embarked on an intensive self-directed learning journey to master modern programming languages and frameworks. 
                This comprehensive approach focused on building strong fundamentals while staying current with industry trends, 
                best practices, and emerging technologies in the software development landscape.
              </p>

              {/* Learning Phases */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center">
                    <Cpu className="h-5 w-5 mr-2 text-primary" />
                    Foundation Phase (2021-2022)
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground pl-7">
                    <p>• Started with Python programming fundamentals and object-oriented concepts</p>
                    <p>• Mastered HTML5 and CSS3 for modern web development standards</p>
                    <p>• Built first web applications with vanilla JavaScript</p>
                    <p>• Learned version control with Git and collaborative development practices</p>
                    <p>• Completed 8+ foundational projects to solidify core concepts</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Expansion Phase (2022-2023)
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground pl-7">
                    <p>• Advanced to Java programming and enterprise application development</p>
                    <p>• Explored web frameworks including Django, Flask, and React</p>
                    <p>• Gained expertise in database design with MySQL and MongoDB</p>
                    <p>• Developed understanding of API design and RESTful services</p>
                    <p>• Built 10+ intermediate to advanced projects</p>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Current Focus (2023-Present)
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-4 bg-accent/10">
                    <Server className="h-6 w-6 text-primary mb-2" />
                    <h5 className="font-medium mb-2">Full-Stack Mastery</h5>
                    <p className="text-sm text-muted-foreground">
                      Advanced backend architectures, microservices, and scalable system design patterns
                    </p>
                  </Card>
                  <Card className="p-4 bg-accent/10">
                    <Globe className="h-6 w-6 text-primary mb-2" />
                    <h5 className="font-medium mb-2">Modern Frameworks</h5>
                    <p className="text-sm text-muted-foreground">
                      Latest React patterns, Node.js ecosystem, and progressive web applications
                    </p>
                  </Card>
                  <Card className="p-4 bg-accent/10">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <h5 className="font-medium mb-2">Industry Practices</h5>
                    <p className="text-sm text-muted-foreground">
                      DevOps principles, testing methodologies, and professional development workflows
                    </p>
                  </Card>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Key Achievements & Milestones
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Completed 25+ comprehensive programming projects across multiple domains",
                    "Achieved proficiency in 5 programming languages with practical applications",
                    "Built expertise in both frontend and backend development technologies",
                    "Mastered modern web development frameworks and industry-standard tools",
                    "Contributed to 10+ open-source projects and community repositories",
                    "Developed strong understanding of software architecture and design patterns",
                    "Gained experience with database design, optimization, and management",
                    "Built responsive, accessible web applications following modern standards",
                    "Implemented secure authentication and authorization systems",
                    "Created automated testing suites and continuous integration workflows"
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="flex items-start text-sm"
                    >
                      <Star className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Mastered */}
              <div>
                <h4 className="text-lg font-medium mb-4">Technologies & Tools Mastered</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "Java", "JavaScript", "HTML5", "CSS3", "React", "Node.js", 
                    "Django", "Flask", "MySQL", "MongoDB", "Git", "Linux", "REST APIs",
                    "Bootstrap", "jQuery", "Express.js", "Maven", "JUnit", "Chart.js"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Learning Resources & Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Learning Methodology & Resources</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Learning Approach</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• <strong>Project-Based Learning:</strong> Built real-world applications to reinforce theoretical concepts</p>
                    <p>• <strong>Incremental Complexity:</strong> Gradually tackled more challenging projects and technologies</p>
                    <p>• <strong>Best Practices Focus:</strong> Emphasized clean code, documentation, and industry standards</p>
                    <p>• <strong>Continuous Practice:</strong> Dedicated daily coding time for consistent skill development</p>
                    <p>• <strong>Problem-Solving:</strong> Regular practice on coding challenges and algorithmic thinking</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Resource Utilization</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• <strong>Official Documentation:</strong> Deep study of language and framework documentation</p>
                    <p>• <strong>Online Courses:</strong> Structured learning through comprehensive development courses</p>
                    <p>• <strong>Open Source:</strong> Analysis and contribution to existing projects for real-world exposure</p>
                    <p>• <strong>Technical Books:</strong> In-depth study of software engineering principles and patterns</p>
                    <p>• <strong>Community Forums:</strong> Active participation in developer communities and Q&A platforms</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-xl mb-4">Continuous Growth & Future Objectives</h3>
              <p className="text-muted-foreground mb-4">
                My learning journey continues with focus on emerging technologies and advanced development practices. 
                I'm committed to staying at the forefront of software development while building meaningful applications 
                that solve real-world problems.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-2 text-primary">Technical Growth</h5>
                  <p className="text-muted-foreground">Cloud platforms, containerization, and advanced system architecture</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-primary">Specialization</h5>
                  <p className="text-muted-foreground">AI/ML integration, modern frontend frameworks, and performance optimization</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-primary">Professional Development</h5>
                  <p className="text-muted-foreground">Team leadership, project management, and mentoring capabilities</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )
    },
    contact: {
      title: "Get In Touch & Collaborate",
      content: (
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-border/50"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-border/50"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input-background border-border/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input-background border-border/50 resize-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button type="submit" className="w-full" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">swarnim.tiwari@example.com</p>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-accent/10">
                  <Calendar className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium">Open to new opportunities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-accent/10">
                  <Github className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">github.com/swarnim-tiwari</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Why Collaborate With Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Rapid Learning & Adaptation</h4>
                    <p className="text-sm text-muted-foreground">
                      Quickly master new technologies and adapt to evolving project requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Solution-Oriented Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on finding creative, efficient solutions to complex technical challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Quality & Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      Deliver high-quality code with comprehensive testing and documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Effective Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear communication and regular updates throughout project development
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )
    }
  };

  const currentContent = sectionContent[section!];

  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Button>
          
          <Badge variant="secondary" className="text-sm">
            {section?.charAt(0).toUpperCase() + section?.slice(1)}
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl mb-4">{currentContent.title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {currentContent.content}
        </motion.div>
      </div>
    </div>
  );
}