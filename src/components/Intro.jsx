import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Leetcode from "../assests/Imagepart/leetcode.png";
import Codechef from "../assests/Imagepart/codechef.png";
import ICPC from "../assests/Imagepart/icpc.png";
import GFG from "../assests/Imagepart/gfg.png";
import Amazon from "../assests/Imagepart/amazon.png";
import Hack from "../assests/Imagepart/hach.png";
import certificate from "../assests/Imagepart/certficate.png";

// Image data
const images = [
  { id: 1, src: Leetcode, alt: "Leetcode" },
  { id: 2, src: Codechef, alt: "Codechef" },
  { id: 3, src: ICPC, alt: "ICPC" },
  { id: 4, src: GFG, alt: "GFG" },
  { id: 5, src: Amazon, alt: "Amazon" },
  { id: 6, src: Hack, alt: "Hackathon" },
  { id: 7, src: certificate, alt: "certficate" },
];

const IntroImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 300); // Match the fade-out duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  const handleNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
  };

  return (
    <div className="w-full h-auto bg-gradient-to-b from-gray-900 to-black text-white flex flex-col lg:flex-row py-16 px-8 relative">
      {/* About Section (Left) */}
      <div className="lg:w-1/2 w-full max-w-screen-lg p-6 mx-auto flex flex-col justify-center space-y-6 pl-8" data-aos="fade-left">
        <div className="pb-8 text-center">
          <p className="text-4xl lg:text-5xl font-extrabold inline border-b-4 border-gray-600">
            More About Me
          </p>
        </div>
        <div className="pl-10">
          <p className="text-xl" data-aos="fade-up">
            I am Ishika Jain, a passionate Software Engineer with a strong foundation in Computer Science. I specialize in full-stack development using the MERN stack and have proficiency in C++ and C.
          </p>
          <br />
          <p className="text-xl" data-aos="fade-up" data-aos-delay="200">
            As an ICPC Regionalist, I have proven my problem-solving abilities and teamwork skills in one of the most prestigious competitive programming events. I also have a range of projects under my belt, both front-end and back-end, that showcase my capability to create impactful and scalable solutions.
          </p>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0 px-6">
        <div className="relative w-full h-96 flex justify-center items-center">
          {/* Gradient Border Around the Card */}
          <div className="relative w-96 h-96 p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
            {/* Main Card Content */}
            <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden flex justify-center items-center">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevImage}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300 hover:scale-110"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300 hover:scale-110"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroImageSection;
