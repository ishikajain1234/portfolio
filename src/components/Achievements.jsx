import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTrophy } from 'react-icons/fa'; 
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si'; 
import Card from './Card';

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {/* ICPC Regionals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              title="ICPC Regionals"
              description="Ranked 329 in ICPC Regionals, showcasing competitive programming skills."
              link="https://www.linkedin.com/in/ishika-jain-3343b6253/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAD6HeVgB0vmO8HnBV2D-yeidvgCLGFFCEIQ"
              linkText="Learn More"
              icon={<FaTrophy size={50} className="text-white" />}
            />
          </motion.div>

          {/* LeetCode Achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card
              title="LeetCode Profile"
              description="Solved 800+ questions, attained a 1700+ rating."
              link="https://leetcode.com/u/ishikajain1234/"
              linkText="View Profile"
              icon={<SiLeetcode size={50} className="text-white" />}
            />
          </motion.div>

          {/* GitHub Achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card
              title="GitHub Profile"
              description="Contributed to multiple open-source projects."
              link="https://github.com/ishikajain1234?tab=repositories"
              linkText="View GitHub"
              icon={<FaGithub size={50} className="text-white" />}
            />
          </motion.div>

          {/* CodeChef Achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card
              title="CodeChef Profile"
              description="3* on CodeChef, achieved 1600+ rating, global rank 129,185,436."
              link="https://www.codechef.com/users/jainishika072"
              linkText="View Profile"
              icon={<SiCodechef size={50} className="text-white" />}
            />
          </motion.div>

          {/* Codeforces Achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card
              title="Codeforces Profile"
              description="Earned a 1150+ rating on Codeforces."
              link="https://codeforces.com/profile/Ishikajain04"
              linkText="View Profile"
              icon={<SiCodeforces size={50} className="text-white" />}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;