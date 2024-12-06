import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hojxhdu', 'template_fetrd6n', form.current, {
        publicKey: 'mBazGF9bWmY4x9Vwo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex justify-center py-12 px-6 bg-gray-100">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="to_name"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

     

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value="Send"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

