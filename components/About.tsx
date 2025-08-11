import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Exploring new technologies and pushing boundaries"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Loving what I do and doing what I love"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Alex, a passionate full-stack developer with over 5 years of experience 
                creating digital experiences that users love. I believe in the power of technology 
                to solve real-world problems and make life better.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a simple curiosity about how websites work, and it has evolved 
                into a deep expertise in modern web technologies, cloud computing, and user experience design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers. I'm always excited about the next challenge!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
              <div className="text-8xl">🚀</div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <motion.div
                  className="mb-4 inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}