import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-300 mt-10 py-10 px-8 rounded-lg shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">About Us</h2>
          <p className="text-base text-gray-700" style={{ textAlign: 'justify' }}>
            Our online institute is dedicated to providing accessible and affordable education for individuals facing financial hardships or those with limited options for completing their graduation degree. We believe in empowering students by offering flexible, high-quality learning opportunities, enabling them to achieve their academic and professional goals from anywhere in the world.
          </p>
        </motion.div>
        
        {/* Quick Links & Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-3 flex flex-row space-x-6"
        >
          {/* Quick Links */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
            <ul className="text-base text-gray-700 space-y-3">
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                Courses
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                Help Line
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                Reviews
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                FAQ
              </motion.li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-base text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:ecollege@gmail.com"
                className="text-blue-600 hover:underline"
              >
                ecollege@gmail.com
              </a>
            </p>
            <p className="text-base text-gray-700 mb-6">
              Phone:{" "}
              <a
                href="tel:+917488870710"
                className="text-blue-600 hover:underline"
              >
                +917488870710
              </a>
            </p>
            <div className="flex space-x-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <motion.a
                  key={platform}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-500 hover:text-gray-800 text-xl"
                  aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${platform}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-10 border-t border-gray-400 pt-6 text-center"
      >
        <p className="text-base text-gray-700">&copy; 2024 E-College. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
