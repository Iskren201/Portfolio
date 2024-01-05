import React from "react";
import Image from "next/image";
import js from "../../public/js.png";
import Html from "../../public/Html.png";
import ReactJs from "../../public/ReactJs2.png";
import Tailwind from "../../public/Tailwind-CSS .png";
import GitHub from "../../public/GitHub.png";
import { FaGithub } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center m-4">
          Tech Stack & About
        </h3>
        {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I have accumulated one year of hands-on experience in web development,
          focusing on
          <span className="text-yellow-400"> JavaScript</span>,
          <span className="text-[#dd4b25]"> HTML</span> ,
          <span className="text-[#149eca]">ReactJS </span> ,
          <span className="text-[#36b7f0]">Tailwind CSS</span>,
          <span className="text-[#e84e31]">GitHub</span>, and
          <span className="text-[#ff6c37]">Postman</span>. My journey as a
          self-taught front-end developer includes coursework at SoftUni,
          university studies, and the successful completion of independent
          projects. During this time, I've actively contributed to several
          small-scale projects, showcasing my proficiency in these technologies.
          I am enthusiastic about expanding my skill set and contributing to
          innovative projects."
        </p> */}
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
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
      <div className="lg:flex gap-10">
        <div>
          <Image src={js} width={100} height={100} />
          <Image src={Html} width={100} height={100} />
          <Image src={ReactJs} width={100} height={100} />
          <Image src={Tailwind} width={100} height={100} />
          <Image src={""} width={100} height={100} />
        </div>
        {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div> */}
        {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div> */}
      </div>
    </>
  );
};

export default Service;
