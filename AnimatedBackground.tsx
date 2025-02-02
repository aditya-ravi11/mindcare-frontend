import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="animated-background">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="sphere"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: isDark
              ? `radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.4), rgba(129, 140, 248, 0.1))`
              : `radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.2), rgba(129, 140, 248, 0.05))`,
          }}
        />
      ))}
    </div>
  );
};