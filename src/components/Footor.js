import React from 'react'


export const Footor = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="text-2xl font-semibold">
          <h2>Your Name</h2>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="space-x-6 text-lg">
          <a href="https://wa.me/yourphonenumber" target="_blank" className="hover:text-indigo-400">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-indigo-400">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-indigo-400">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="tel:+1234567890" className="hover:text-indigo-400">
            <i className="fas fa-phone-alt"></i> Phone
          </a>
        </div>
      </div>

      {/* Scrollable Links */}
      <div className="mt-8 sm:mt-12">
        <div className="flex justify-center space-x-8 text-lg">
          <a href="#home" className="hover:text-indigo-400">Home</a>
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#education" className="hover:text-indigo-400">Education</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-sm text-gray-400">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
