import React from "react";
import Image from "next/image";
import js from "../../public/js.png";
import Html from "../../public/Html.png";
import ReactJs from "../../public/ReactJs2.png";
import Tailwind from "../../public/Tailwind-CSS .png";
import GitHub from "../../public/GitHub.png";
import PostMan from "../../public/postman.png";

const Service = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center m-4 ">
          Tech Stack & About
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-6">
          I have accumulated one year of hands-on experience in web development,
          focusing on
          <span className="text-yellow-400"> JavaScript</span>,
          <span className="text-[#dd4b25]"> HTML</span>,
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
      {/* <div className="lg:flex  "> */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around">
        <Image src={js} width={100} height={100} />
        <Image src={Html} width={100} height={100} />
        <Image src={ReactJs} width={100} height={100} />
        <Image src={Tailwind} width={100} height={100} />
        <Image src={GitHub} width={100} height={100} />
        <Image src={PostMan} width={150} height={100} />
      </div>
      {/* </div> */}
    </>
  );
};

export default Service;
