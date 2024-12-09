import React from 'react';

export const Footor = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="text-2xl font-semibold">
            <h2 className="text-lg sm:text-2xl">Aravindan</h2>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 text-base sm:text-lg flex flex-col sm:flex-row justify-center items-center">
            <a href="https://wa.me/8248221211" target="_blank" className="hover:text-indigo-400 flex items-center">
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
            <a href="mailto:your.aravindaravind2556@gmail.com" className="hover:text-indigo-400 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Email
            </a>
            <a href="https://github.com/Aravind2556?tab=repositories" target="_blank" className="hover:text-indigo-400 flex items-center">
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a href="tel:+8248221211" className="hover:text-indigo-400 flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> Phone
            </a>
            <a href="https://www.linkedin.com/in/d-aravindan" target="_blank" className="hover:text-indigo-400 flex items-center">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Scrollable Links */}
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <a href="#home" className="hover:text-indigo-400">Home</a>
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#education" className="hover:text-indigo-400">Education</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-sm text-gray-400">
          <p>&copy; 2024 Aravindan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

