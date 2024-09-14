import React from 'react';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';
import Mission from './Components/Mission';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import FAQs from './Components/FAQ';
import './Components/Styles.css'; // Import the CSS file

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Mission />
      <Gallery />
      <FAQs />
      
      <Contact />
      <Footer />
    </>
  );
};

export default App;
