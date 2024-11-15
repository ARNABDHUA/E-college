import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-300 py-10 px-8 rounded-lg shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">About Us</h2>
          <p className="text-base text-gray-700" style={{ textAlign: 'justify' }}>
            Our online institute is dedicated to providing accessible and affordable education for individuals facing financial hardships or those with limited options for completing their graduation degree. We believe in empowering students by offering flexible, high-quality learning opportunities, enabling them to achieve their academic and professional goals from anywhere in the world.
          </p>
        </div>
        

        <div className="md:col-span-3 flex flex-row space-x-6">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
            <ul className="text-base text-gray-700 space-y-3">
              <li>Courses</li>
              <li>Help Line</li>
              <li>Reviews</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-base text-gray-700 mb-2">Email: <a href="mailto:ecollege@gmail.com" className="text-blue-600 hover:underline">ecollege@gmail.com</a></p>
            <p className="text-base text-gray-700 mb-6">Phone: <a href="tel:+917488870710" className="text-blue-600 hover:underline">+917488870710</a></p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-800 text-xl" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 text-xl" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 text-xl" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 text-xl" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-400 pt-6 text-center">
        <p className="text-base text-gray-700">&copy; 2024 E-College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;