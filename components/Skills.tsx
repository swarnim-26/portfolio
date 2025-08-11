import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-500" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "Motion/Framer", level: 80, color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
        { name: "Python", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "PostgreSQL", level: 82, color: "from-indigo-500 to-indigo-600" },
        { name: "MongoDB", level: 78, color: "from-green-400 to-green-500" },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "AWS", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Git", level: 95, color: "from-red-500 to-red-600" },
        { name: "Figma", level: 88, color: "from-pink-500 to-pink-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-accent/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of modern technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl mb-6 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <motion.div
                          className={`absolute top-0 right-0 h-2 w-2 bg-gradient-to-r ${skill.color} rounded-full`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: skillIndex * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}