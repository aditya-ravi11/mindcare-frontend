import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types';

const lightTheme: Theme = {
  primary: '#6366f1',
  background: '#ffffff',
  text: '#1f2937',
  surface: 'rgba(255, 255, 255, 0.8)',
  error: '#ef4444',
};

const darkTheme: Theme = {
  primary: '#818cf8',
  background: '#111827',
  text: '#f3f4f6',
  surface: 'rgba(31, 41, 55, 0.8)',
  error: '#f87171',
};

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--background', theme.background);
    document.documentElement.style.setProperty('--text', theme.text);
    document.documentElement.style.setProperty('--surface', theme.surface);
    document.documentElement.style.setProperty('--error', theme.error);
  }, [isDark, theme]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};