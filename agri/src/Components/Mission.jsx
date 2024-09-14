import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" style={sectionStyles}>
      <div style={containerStyles}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={contentStyles}
        >
          <h2 style={headingStyles}>Our Mission</h2>
          <p style={paragraphStyles}>
            At AG-Chain, we're on a mission to revolutionize the agricultural industry by leveraging the power of blockchain and Web3 technologies. We aim to create a more transparent, efficient, and sustainable food system that benefits farmers, consumers, and the planet.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#2f855a', color: 'white' }}
            whileTap={{ scale: 0.95 }}
            style={buttonStyles}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Styles
const sectionStyles = {
  position: 'relative',
  padding: '4rem 0',
  background: 'linear-gradient(to right, #f4c430 30%, #ffffff 10%, #d3f9d8 70%)',
};

const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 1.5rem',
};

const contentStyles = {
  textAlign: 'center',
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const headingStyles = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#2f855a',
  marginBottom: '1.5rem',
};

const paragraphStyles = {
  fontSize: '1.25rem',
  color: '#333',
  marginBottom: '2rem',
};

const buttonStyles = {
  backgroundColor: '#38a169',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '9999px',
  fontSize: '1.125rem',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

export default Mission;
