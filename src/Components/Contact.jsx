import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const sectionStyles = {
    padding: '80px 0',
    backgroundColor: '#fff',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
  };

  const headingStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '48px',
  };

  const formContainerStyles = {
    maxWidth: '768px',
    margin: '0 auto',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const labelStyles = {
    marginBottom: '8px',
    fontWeight: '500',
  };

  const inputStyles = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const textareaStyles = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyles = {
    backgroundColor: '#38a169',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyles = {
    backgroundColor: '#2f855a',
  };

  return (
    <section id="contact" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>Contact Us</h2>
        <div style={formContainerStyles}>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={formStyles}
          >
            <div>
              <label htmlFor="name" style={labelStyles}>Name</label>
              <input type="text" id="name" style={inputStyles} required />
            </div>
            <div>
              <label htmlFor="email" style={labelStyles}>Email</label>
              <input type="email" id="email" style={inputStyles} required />
            </div>
            <div>
              <label htmlFor="message" style={labelStyles}>Message</label>
              <textarea id="message" rows={4} style={textareaStyles} required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyles}
              onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
