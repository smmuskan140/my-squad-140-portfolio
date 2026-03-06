'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-purple-500/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Squad 140</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the future through innovation, collaboration, and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-blue-300 transition">Home</a></li>
              <li><a href="#mentors" className="text-gray-300 hover:text-blue-300 transition">Mentors</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-blue-300 transition">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/30 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Squad 140. All rights reserved. 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
