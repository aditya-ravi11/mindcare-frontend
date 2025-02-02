import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '../components/Layout/AnimatedBackground';

export const Home = () => {
  return (
    <div className="home">
      <AnimatedBackground />
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/logo.svg" alt="MindCare Assistant Logo" className="logo" />
        <h1>Welcome to MindCare Assistant</h1>
        <p>Your companion for mental wellness and support</p>
        <Link to="/signin" className="cta-button">
          Get Started
        </Link>
      </motion.div>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Empathetic Support</h3>
            <p>24/7 AI-powered chat support that understands and responds with empathy</p>
          </div>
          <div className="feature-card">
            <h3>Privacy Focused</h3>
            <p>Your conversations are private and secure, always</p>
          </div>
          <div className="feature-card">
            <h3>Free Access</h3>
            <p>Mental health support should be accessible to everyone</p>
          </div>
        </div>
      </section>
    </div>
  );
};