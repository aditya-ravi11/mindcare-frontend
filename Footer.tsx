import { useTheme } from '../../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MindCare Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
};