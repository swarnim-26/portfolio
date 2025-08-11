import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        onClick={() => setIsDark(!isDark)}
        size="icon"
        variant="outline"
        className="rounded-full bg-background/80 backdrop-blur-lg border-border/50 hover:bg-accent/50 shadow-lg"
      >
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.div>
      </Button>
    </motion.div>
  );
}