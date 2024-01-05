import React, { useState } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import iskren from "../../public/Iskren.jpg";
import Image from "next/image";
import Service from "./Service";
import About from "./About";
import Carts from "./Carts";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-gray-300 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="Resume.pdf"
                  attributes-list
                  download="Resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Iskren Iliev
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Student.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I have been working non-professionally in Front-end development
              for the past year. As a third-year student, I am eager to further
              develop my skills in web development and pursue a career as a
              Front-end developer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/Iskren201"
                target="_blank"
                rel="Iskren201"
              >
                <FaGithub />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/iskren-iliev-31a809257/"
                target="_blank"
                rel="linkedin"
              >
                <FaLinkedin />
              </a> */}
              <a
                href="https://www.linkedin.com/in/iskren-iliev-31a809257/"
                target="_blank"
                rel="linkedin"
              >
                <GrLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={iskren} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <Service />
        </section>
        <section className="py-10">
          <About />
          <Carts />
        </section>
      </main>
    </div>
  );
};

export default Header;
