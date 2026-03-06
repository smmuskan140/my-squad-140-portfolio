'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Resources', href: '#resources' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-700/80 to-purple-900/80 backdrop-blur-md z-50 border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Squad 140</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button className="px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-700 transition-all font-semibold">
              Inquire →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-purple-600 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-700 transition-all mt-2">
              Inquire →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
