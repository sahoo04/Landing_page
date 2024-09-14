import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const sectionStyles = {
    position: 'relative',
    height: '92vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))', // Gradient for a smooth bottom transition
  };

  const videoWrapperStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  };

  const videoStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textWrapperStyles = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    color: 'black',
    padding: '0 20px',
  };

  const headingStyles = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Added shadow for better visibility
  };

  const paragraphStyles = {
    fontSize: '24px',
    marginBottom: '400px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Added shadow for better readability
  };

  const buttonStyles = {
    backgroundColor: '#b80b2d',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  };

  return (
    <section id="home" style={sectionStyles}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={videoWrapperStyles}
      >
        <video
          src="/H1.mp4"
          autoPlay
          loop
          muted
          style={videoStyles}
        />
      </motion.div>
      <div style={textWrapperStyles}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={headingStyles}
        >
          Revolutionizing Agriculture with Blockchain
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={paragraphStyles}
        >
          Empowering farmers with Web3 technology
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#2f855a' }} // Enhanced hover effect
          whileTap={{ scale: 0.95 }}
          style={buttonStyles}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
