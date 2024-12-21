import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaTrophy } from 'react-icons/fa'; 
import { SiLeetcode } from 'react-icons/si'; 

const Achievements = () => {
  return (
    <div name="achievements" className="w-full bg-gradient-to-b from-gray-800 to-black text-white min-h-screen py-16">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-12 text-center">
          <motion.p
            className="text-5xl font-extrabold inline border-b-4 border-pink-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Achievements
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Here's a collection of my achievements and contributions in competitive programming and open-source development.
          </motion.p>
        </div>

        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
         
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">ICPC Regionals</h3>
              <p className="text-lg text-white mb-4 text-center">
                Participated in the ICPC Regionals, showcasing my competitive programming skills and got 329 rank.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/ishika-jain-3343b6253/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAD6HeVgB0vmO8HnBV2D-yeidvgCLGFFCEIQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-pink-600 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Achievement */}
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">LeetCode Profile</h3>
              <div className="flex justify-center items-center mb-4">
                <SiLeetcode size={60} className="text-white" />
                <p className="ml-4 text-xl font-semibold text-white">Solved 800+ questions and attained a 1700+ rating</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://leetcode.com/u/ishikajain1234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-pink-600 transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* GitHub Achievement */}
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">GitHub Profile</h3>
              <div className="flex justify-center items-center mb-4">
                <FaGithub size={60} className="text-white" />
                <p className="ml-4 text-xl font-semibold text-white">Contributed to multiple open-source projects.</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/ishikajain1234?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-pink-600 transition"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* CodeChef Achievement */}
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="card w-full bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">CodeChef Profile</h3>
              <p className="text-lg text-white mb-4 text-center">3* on Codechef,Achieved a 1600+ rating with global rank 129,185,436</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.codechef.com/users/jainishika072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-pink-600 transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Codeforces Achievement */}
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="card w-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">Codeforces Profile</h3>
              <p className="text-lg text-white mb-4 text-center">Earned 1150+rating</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://codeforces.com/profile/Ishikajain04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-pink-600 transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
