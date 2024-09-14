import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">AG-Chain</h3>
            <p className="text-sm">Revolutionizing farmer trading with blockchain technology.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-300">Home</a></li>
              <li><a href="#benefits" className="hover:text-green-300">Benefits</a></li>
              <li><a href="#mission" className="hover:text-green-300">Mission</a></li>
              <li><a href="#gallery" className="hover:text-green-300">Gallery</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm">123 AgriTech Street</p>
            <p className="text-sm">Farmville, AG 12345</p>
            <p className="text-sm">Phone: (555) 123-4567</p>
            <p className="text-sm">Email: info@AG-Chain.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
              <a href="#" className="hover:text-green-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 AG-Chain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
