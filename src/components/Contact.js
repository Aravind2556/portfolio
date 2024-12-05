import React, { useState } from 'react'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // You can integrate with an email service like EmailJS here to send the email
        // For now, we’ll just simulate the form submission and show a message.
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      };
  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Contact</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          If you’d like to get in touch, feel free to send me a message using the form below. I’d be happy to answer any questions!
        </p>

        {/* Contact Form */}
        <div className="w-full max-w-md mx-auto">
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="email" className="block text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  rows="6"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-500 text-white py-3 px-6 rounded-lg text-xl hover:bg-indigo-600 transform transition-all hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
