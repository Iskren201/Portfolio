import React from "react";
import Image from "next/image";
import js from "../../public/js.png";
import Html from "../../public/Html.png";
import ReactJs from "../../public/ReactJs2.png";
import Tailwind from "../../public/Tailwind-CSS .png";
import GitHub from "../../public/GitHub.png";
import PostMan from "../../public/postman.png";
import TextTypingService from "../assets/TextTypingService";

const Service = () => {
  return (
    <>
      <TextTypingService />
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
