import React from "react";
import Image from "next/image";
import js from "../../public/js.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

const Service = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center m-4">
          Tech Stack & About me
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          JavaScript
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div>
          <Image src={js} width={100} height={100} />
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
