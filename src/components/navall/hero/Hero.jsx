import React from "react";
import img1 from "../../../assets/hero.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 py-12 px-6 sm:px-12">
      <div className="container mx-auto max-w-7xl flex flex-col-reverse sm:flex-row items-center gap-8">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800">
            Best Quality Education
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mt-4">
            Is More Accessible on
          </h2>
          <h3 className="text-5xl sm:text-6xl lg:text-7xl uppercase text-blue-500 font-extrabold mt-2">
            Ecollege
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mt-6 leading-relaxed">
            Learn from the best instructors and enhance your skills with our affordable and high-quality courses.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/course")}
            className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all"
          >
            Explore Courses
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={img1}
              alt="Hero"
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500 rounded-full shadow-md animate-bounce"></div>
            <div className="absolute top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full shadow-md animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
