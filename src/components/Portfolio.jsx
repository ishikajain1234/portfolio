import React from 'react';
import { motion } from 'framer-motion';
import foodie from "../assests/port-folio/foodie.webp";
import lms from "../assests/port-folio/lms.webp";
import spotify from "../assests/port-folio/spotify.webp";
import todo from "../assests/port-folio/todo.webp";
import wanderlust from "../assests/port-folio/wanderlust.webp";
import parallax from "../assests/port-folio/parall.webp"

const projects = [
  {
    id: 1,
    title: "Foodie",
    description: "A food delivery app showcasing React and API integration.",
    image: foodie,
    demo: "https://mini-project-beta-kohl.vercel.app/",
    code: "https://github.com/ishikajain1234/mini-project",
  },
  {
    id: 2,
    title: "Wanderlust",
    description: "A travel website built using the MERN stack with features like login, logout, and place finding.",
    image: wanderlust,
    demo: "#",
    code: "https://github.com/ishikajain1234/wanderlust-website",
  },
  
  {
    id: 3,
    title: "LMS",
    description: "To provide students with a structured, centralized resource hub for their academic journey and placement preparation, tailored specifically for AKTU's curriculum and requirements.",
    image: lms,
    demo: "#",
    code: "https://github.com/ishikajain1234/AKTU-GHAR",
  },
  
  {
    id: 5,
    title: "To-Do App",
    description: "A simple and effective to-do list application built with JS.",
    image: todo,
    demo: "#",
    code: "https://github.com/ishikajain1234/todoapp",
  },
  {
    id: 6,
    title: "PARALLAX WEBSITE",
    description: "A parallax website is a type of website design that uses a scrolling effect to create a sense of depth and immersion. ",
    image: parallax,
    demo: "#",
    code: "https://github.com/ishikajain1234/project1",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "A clone of Spotify built with HTML and CSS showcasing a sleek UI design.",
    image: spotify,
    demo: "https://spotify-clone-orcin-two.vercel.app/",
    code: "https://github.com/ishikajain1234/Spotify-Clone",
  },
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-8">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.p>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Check out some of my work right here
          </motion.p>
        </div>

        {/* Projects Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {projects.map(({ id, title, description, image, demo, code }) => (
            <motion.div
              key={id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden relative group transform transition duration-500 ease-in-out hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: id * 0.2 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition duration-500 group-hover:blur-lg group-hover:scale-110"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm mb-4">{description}</p>
                <motion.div
                  className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-80 group-hover:translate-y-0 translate-y-20 transition-all duration-500 flex items-center justify-center"
                  initial={{ opacity: 0, translateY: "-20px" }}
                  whileHover={{ opacity: 1, translateY: "0" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center text-white p-6">
                    <h4 className="text-lg mb-4">Project Details</h4>
                    <p className="text-sm mb-4">{description}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-pink-500 rounded hover:bg-gray-100 transition"
                      >
                        Demo
                      </a>
                      <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-pink-500 rounded hover:bg-gray-100 transition"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
