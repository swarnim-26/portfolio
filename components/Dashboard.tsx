import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  User, 
  Code, 
  FolderOpen, 
  Briefcase, 
  Mail, 
  MapPin, 
  Calendar,
  Coffee,
  Globe,
  Github,
  Star,
  Award,
  Target
} from 'lucide-react';
import { SectionType } from '../App';

interface DashboardProps {
  onSectionSelect: (section: SectionType) => void;
}

export function Dashboard({ onSectionSelect }: DashboardProps) {
  const boardSections = [
    {
      id: 'about' as SectionType,
      title: 'About Me',
      subtitle: 'Developer Profile',
      icon: User,
      description: 'Passionate full-stack developer from India with expertise in modern technologies and problem-solving',
      color: 'from-blue-500/20 to-purple-500/20',
      hoverColor: 'hover:from-blue-500/30 hover:to-purple-500/30',
      size: 'large'
    },
    {
      id: 'skills' as SectionType,
      title: 'Technical Skills',
      subtitle: 'Core Technologies',
      icon: Code,
      description: 'Python • Java • JavaScript • HTML • CSS • Modern Frameworks and Tools',
      color: 'from-green-500/20 to-teal-500/20',
      hoverColor: 'hover:from-green-500/30 hover:to-teal-500/30',
      size: 'large'
    },
    {
      id: 'projects' as SectionType,
      title: 'Projects',
      subtitle: 'Portfolio Showcase',
      icon: FolderOpen,
      description: 'Web applications, automation tools, and innovative solutions built with various technologies',
      color: 'from-orange-500/20 to-red-500/20',
      hoverColor: 'hover:from-orange-500/30 hover:to-red-500/30',
      size: 'large'
    },
    {
      id: 'experience' as SectionType,
      title: 'Experience',
      subtitle: 'Professional Journey',
      icon: Briefcase,
      description: 'Self-taught developer journey, freelance projects, and community contributions',
      color: 'from-purple-500/20 to-pink-500/20',
      hoverColor: 'hover:from-purple-500/30 hover:to-pink-500/30',
      size: 'medium'
    },
    {
      id: 'contact' as SectionType,
      title: 'Contact',
      subtitle: 'Get in Touch',
      icon: Mail,
      description: 'Ready to collaborate on exciting projects and bring innovative ideas to life',
      color: 'from-cyan-500/20 to-blue-500/20',
      hoverColor: 'hover:from-cyan-500/30 hover:to-blue-500/30',
      size: 'medium'
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "20+ Projects",
      subtitle: "Completed Successfully"
    },
    {
      icon: Award,
      title: "5+ Languages",
      subtitle: "Programming Expertise"
    },
    {
      icon: Target,
      title: "100% Delivery",
      subtitle: "On-time Completion"
    }
  ];

  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Swarnim Tiwari
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-6 text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-4 w-4" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Available for Projects</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Column - About & Skills */}
          <div className="lg:col-span-2 space-y-6">
            {boardSections.slice(0, 2).map((section, index) => {
              const IconComponent = section.icon;
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <Card
                    className={`
                      group relative overflow-hidden cursor-pointer h-full min-h-[250px]
                      bg-gradient-to-br ${section.color} ${section.hoverColor}
                      backdrop-blur-sm border-border/50 transition-all duration-500
                      hover:shadow-2xl hover:-translate-y-2
                    `}
                    onClick={() => onSectionSelect(section.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                    
                    <div className="relative p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="p-3 rounded-xl bg-background/20 backdrop-blur-sm"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.div>
                        
                        <Badge variant="secondary" className="text-xs backdrop-blur-sm">
                          {section.subtitle}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                      
                      <motion.div
                        className="flex items-center text-sm text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                      >
                        <span>Explore Details</span>
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column - Photo & Achievements */}
          <div className="lg:col-span-1 space-y-6">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <motion.div
                  className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                >
                  <div className="w-full h-full rounded-xl bg-muted/20 backdrop-blur-sm flex items-center justify-center border border-border/50 relative overflow-hidden">
                    <div className="text-6xl select-none">S</div>
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground bg-card/90 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                      Photo Space
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-background"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>

              {/* GitHub Link */}
              <motion.a
                href="#"
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                    <achievement.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Projects, Experience, Contact */}
          <div className="lg:col-span-2 space-y-6">
            {boardSections.slice(2).map((section, index) => {
              const IconComponent = section.icon;
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className={section.size === 'large' ? '' : ''}
                >
                  <Card
                    className={`
                      group relative overflow-hidden cursor-pointer h-full
                      ${section.size === 'large' ? 'min-h-[250px]' : 'min-h-[200px]'}
                      bg-gradient-to-br ${section.color} ${section.hoverColor}
                      backdrop-blur-sm border-border/50 transition-all duration-500
                      hover:shadow-2xl hover:-translate-y-2
                    `}
                    onClick={() => onSectionSelect(section.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                    
                    <div className="relative p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="p-3 rounded-xl bg-background/20 backdrop-blur-sm"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.div>
                        
                        <Badge variant="secondary" className="text-xs backdrop-blur-sm">
                          {section.subtitle}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                      
                      <motion.div
                        className="flex items-center text-sm text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                      >
                        <span>View Details</span>
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Click on any section above to explore detailed information about my skills and experience
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated Recently</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Open Source Contributor</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>Quality Focused</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}