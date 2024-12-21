import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Social media icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800"> {/* Change the background color here */}
      <div name="contact" className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16 flex-grow">
        <div className="max-w-screen-lg mx-auto px-6">
         
          <motion.p
            className="text-5xl font-extrabold text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I'd love to hear from you. Please reach out to me using the form below or through my social media.
          </motion.p>

          
          <motion.form
            className="w-full max-w-lg mx-auto"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full p-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

         
          <motion.div
            className="flex justify-center space-x-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/ishika-jain-3343b6253/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAD6HeVgB0vmO8HnBV2D-yeidvgCLGFFCEIQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-pink-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ishikajain1234?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-pink-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-3xl text-white hover:text-pink-500 transition"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>

      
      <div className="w-full bg-gray-900 text-white py-8 mt-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Made with <span role="img" aria-label="heart">❤️</span> by Ishika
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thank you for visiting my portfolio!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
