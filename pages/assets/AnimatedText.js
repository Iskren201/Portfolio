import React from "react";

const AnimatedText = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center m-4 text-slide-in-from-bottom">
          Tech Stack & About
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-6">
          I have accumulated one year of hands-on experience in web development,
          focusing on
          <span className="text-yellow-600 dark:text-[#efd81d]">
            {" "}
            JavaScript
          </span>
          ,<span className="text-[#dd4b25]"> HTML</span>,
          <span className="text-[#149eca]"> ReactJS</span>,
          <span className="text-[#36b7f0]"> Tailwind CSS</span>,
          <span className="text-[#e84e31]"> GitHub</span>, and
          <span className="text-[#ff6c37]"> Postman</span>. My journey as a
          self-taught front-end developer includes coursework at SoftUni,
          university studies, and the successful completion of independent
          projects. During this time, I've actively contributed to several
          small-scale projects, showcasing my proficiency in these technologies.
          I am enthusiastic about expanding my skill set and contributing to
          innovative projects.
        </p>
      </div>
    </>
  );
};

export default AnimatedText;
