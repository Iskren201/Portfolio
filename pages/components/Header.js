import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Service from "./Service";
import About from "./About";
import Carts from "./Carts";
import HeaderText from "./HeaderText";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-gray-300 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white text-black">
            <h1 className="font-burtons text-xl ">Portfolios</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
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
          <HeaderText />
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
