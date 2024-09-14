import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyles = {
    background: 'linear-gradient(to bottom, #90e3c1 0%, #e2eef3 100%)',


    color: 'black',
    padding: '16px',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const logoStyles = {
    width: '40px',
    height: '40px',
  };

  const linkContainerStyles = {
    display: 'none',
    gap: '16px',
  };

  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const mobileMenuButtonStyles = {
    display: 'none',
  };

  const mobileMenuStyles = {
    display: 'block',
    padding: '16px',
    backgroundColor: '#276749',
    fontSize: '14px',
    color: 'Black',
    textDecoration: 'none',
  };

  

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={logoContainerStyles}
        >
          <img src="/logo.svg" alt="AG-Chain Logo" style={logoStyles} />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>AG-Chain</span>
        </motion.div>
        <div style={{ ...linkContainerStyles, display: 'flex' }}>
          {['Home', 'Benefits', 'Mission', 'Gallery', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              style={linkStyles}
              onMouseEnter={(e) => (e.target.style.color = 'black')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {item}
            </motion.a>
          ))}
        </div>
       
      </div>

     
    </nav>
  );
};

export default Navbar;
