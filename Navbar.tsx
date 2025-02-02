import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../context/AudioContext';
import { FaSun, FaMoon, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isPlaying, volume, togglePlay, setVolume } = useAudio();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MindCare Assistant</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>
          Sign In
        </Link>
        <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
          Sign Up
        </Link>
        <Link to="/chat" className={location.pathname === '/chat' ? 'active' : ''}>
          Chat
        </Link>
      </div>
      <div className="navbar-controls">
        <button onClick={togglePlay} className="icon-button">
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="volume-slider"
        />
        <button onClick={toggleTheme} className="icon-button">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};