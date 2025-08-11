import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dashboard } from "./components/Dashboard";
import { DetailedView } from "./components/DetailedView";
import { ThemeToggle } from "./components/ThemeToggle";

export type SectionType =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | null;

export default function App() {
  const [currentSection, setCurrentSection] =
    useState<SectionType>(null);
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content */}
      <main className="relative min-h-screen">
        <AnimatePresence mode="wait">
          {currentSection === null ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Dashboard onSectionSelect={setCurrentSection} />
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <DetailedView
                section={currentSection}
                onBack={() => setCurrentSection(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}