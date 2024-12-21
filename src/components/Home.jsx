import React from 'react';
import HeroImage from "../assests/port-folio/HeroImage.jpg";
import { FaArrowRight, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { Link } from 'react-scroll';  // Import react-scroll Link
import Typewriter from 'typewriter-effect'; // Import typewriter-effect library
import './Home.css'; // Import custom CSS file for animation

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 py-16">
        {/* Left side text */}
        <div className="text-white text-center md:text-left animate-left md:max-w-lg">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            <Typewriter
              options={{
                strings: [
                  "I'm a MERN Stack Developer",
                  "I'm a C++ Programmer",
                  "I'm a Frontend Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h2>
          <p className="text-lg mb-6">
            A dedicated web developer proficient in the MERN stack and a competitive programming enthusiast. My goal is to create innovative solutions that drive growth and success.
          </p>
          <div className="flex justify-center md:justify-start">
            {/* Scroll to Portfolio Button */}
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="px-8 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center hover:scale-105 hover:shadow-lg transition-transform duration-300">
                Portfolio
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
          
          {/* Skills Marquee Effect */}
          <div className="skills-marquee mt-6">
            <div className="skills-icons flex justify-center space-x-6">
              <FaHtml5 size={30} className="text-red-600 hover:text-red-400 transition duration-300" />
              <FaCss3Alt size={30} className="text-blue-600 hover:text-blue-400 transition duration-300" />
              <FaJs size={30} className="text-yellow-500 hover:text-yellow-300 transition duration-300" />
              <FaReact size={30} className="text-cyan-500 hover:text-cyan-400 transition duration-300" />
              <FaNodeJs size={30} className="text-green-500 hover:text-green-400 transition duration-300" />
              <FaDocker size={30} className="text-blue-400 hover:text-blue-300 transition duration-300" />
            </div>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="mt-8 md:mt-0 md:ml-10 animate-right">
          <img 
            src={HeroImage} 
            alt="Hero" 
            className="rounded-full shadow-lg w-72 h-72 md:w-96 md:h-96 object-cover mx-auto" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
