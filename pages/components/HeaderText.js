import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Image from "next/image";
import iskren from "../../public/Iskren.jpg";
import { animate } from "motion";

import { useTypingEffect } from "./hooks/typing-effect";

const HeaderText = () => {
  const text = useTypingEffect("Iskren Iliev", 150);

  useEffect(() => {
    animate("#iskren-image", { scale: 1, opacity: 1 }, { duration: 6.0 });
  }, []);
  return (
    <>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          {text}
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl text-slide-in-left">
          Developer and Student.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-slide-in-right">
          I have been working non-professionally in Front-end development for
          the past year. As a third-year student, I am eager to further develop
          my skills in web development and pursue a career as a Front-end
          developer.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
          <a
            href="https://github.com/Iskren201"
            target="_blank"
            rel="Iskren201"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/iskren-iliev-31a809257/"
            target="_blank"
            rel="linkedin"
          >
            <GrLinkedin />
          </a>
        </div>
        <div
          id="iskren-image"
          className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96 sm:w-40 sm:h-40 opacity-0 scale-0"
        >
          <Image src={iskren} layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
};

export default HeaderText;
