import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { useTheme } from '../context/ThemeContext';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { AnimatedBackground } from '../components/Layout/AnimatedBackground';

// Note: Add audio files to /public/audio/ directory
const availableAudios = [
  { id: 'ambient', name: 'Ambient Music', path: '/audio/ambient.mp3' },
  { id: 'nature', name: 'Nature Sounds', path: '/audio/nature.mp3' },
  // Add more audio options here
];

export const Settings = () => {
  const { isPlaying, volume, togglePlay, setVolume } = useAudio();
  const { isDark } = useTheme();
  const [selectedAudio, setSelectedAudio] = useState('ambient');
  const [notifications, setNotifications] = useState(true);
  const [chatFontSize, setChatFontSize] = useState('medium');

  const handleAudioChange = (audioId: string) => {
    setSelectedAudio(audioId);
    // Note: Implement audio change logic in AudioContext
  };

  return (
    <div className="settings-page">
      <AnimatedBackground />
      <motion.div
        className="settings-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Settings</h2>
        
        <section className="settings-section">
          <h3>Audio Settings</h3>
          <div className="setting-group">
            <label>Background Music</label>
            <div className="audio-controls">
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
              <span>{Math.round(volume * 100)}%</span>
            </div>
          </div>
          
          <div className="setting-group">
            <label>Select Background Audio</label>
            <select
              value={selectedAudio}
              onChange={(e) => handleAudioChange(e.target.value)}
              className="audio-select"
            >
              {availableAudios.map(audio => (
                <option key={audio.id} value={audio.id}>
                  {audio.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h3>Chat Settings</h3>
          <div className="setting-group">
            <label>Font Size</label>
            <select
              value={chatFontSize}
              onChange={(e) => setChatFontSize(e.target.value)}
              className="font-size-select"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h3>Notifications</h3>
          <div className="setting-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              Enable notifications
            </label>
          </div>
        </section>

        <div className="settings-info">
          <p>Note: Place audio files in the following directory:</p>
          <code>/public/audio/</code>
          <ul>
            <li>ambient.mp3 - Default ambient music</li>
            <li>nature.mp3 - Nature sounds</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};