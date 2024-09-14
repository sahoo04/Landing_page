import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/G1.jpeg',
  '/G@.jpeg',
  '/G3.jpeg',
  '/G4.jpg',
  '/G5.jpg',
  '/G6.jpg',
  '/G6.jpg',
  '/G6.jpg',
   
];

const Gallery = () => {
  const sectionStyles = {
    padding: '80px 0',
    backgroundColor: '#f7fafc',
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

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  };

  const gridResponsiveStyles = {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  };

  const imageWrapperStyles = {
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    width: '100%',
    height: '256px',
    objectFit: 'cover',
  };

  return (
    <section id="gallery" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>Gallery</h2>
        <div
          style={{
            ...gridStyles,
            ...gridResponsiveStyles,
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={imageWrapperStyles}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                style={imageStyles}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
