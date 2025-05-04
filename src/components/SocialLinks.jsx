import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/ishika-jain-3343b6253/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={25} />,
      href: "https://github.com/ishikajain1234?tab=repositories",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={25} />,
      href: "mailto:your-email@example.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={25} />,
      href: "/Ishika_Jain.pdf",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, name, icon, href, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:rounded-md bg-gradient-to-r from-gray-700 to-black transition-all duration-300 text-white"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
