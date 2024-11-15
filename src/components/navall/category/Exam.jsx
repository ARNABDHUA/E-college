import React from "react";
import { PROJECTS } from "../../../assets/Assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Exam = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-12 mx-4 " id="project">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
        Popular Exam
      </h2>

      <div className="flex items-center justify-center px-2 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.filter((project) =>
            project.title.toLowerCase().includes("i".toLowerCase())
          ).map((project) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-lg group bg-white"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center text-white px-4 py-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-lg mb-4">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate(project.Link)}
                  className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-all"
                >
                  View Course
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Exam;
