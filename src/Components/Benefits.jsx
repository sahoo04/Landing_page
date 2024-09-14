import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Link, Leaf } from 'lucide-react';

const benefitsData = [
  {
    icon: <Shield style={{ width: '48px', height: '48px', color: '#38a169' }} />,
    title: 'Enhanced Security',
    description: 'Blockchain ensures secure and tamper-proof record-keeping for all agricultural data.'
  },
  {
    icon: <Link style={{ width: '48px', height: '48px', color: '#38a169' }} />,
    title: 'Supply Chain Transparency',
    description: 'Track products from farm to table with complete visibility and traceability.'
  },
  {
    icon: <Leaf style={{ width: '48px', height: '48px', color: '#38a169' }} />,
    title: 'Sustainable Practices',
    description: 'Promote and verify eco-friendly farming methods through blockchain certification.'
  }
];

const Benefits = () => {
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
    gap: '32px',
  };

  const cardStyles = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const iconWrapperStyles = {
    marginBottom: '16px',
  };

  const titleStyles = {
    marginTop: '16px',
    marginBottom: '8px',
    fontSize: '20px',
    fontWeight: '600',
  };

  const descriptionStyles = {
    color: '#4a5568',
  };

  return (
    <section id="benefits" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>Benefits of AG-Chain</h2>
        <div
          style={{
            ...gridStyles,
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          }}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={cardStyles}
            >
              <div style={iconWrapperStyles}>
                {benefit.icon}
              </div>
              <h3 style={titleStyles}>{benefit.title}</h3>
              <p style={descriptionStyles}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
