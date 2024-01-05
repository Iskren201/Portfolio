import React from "react";
import web1 from "../../public/web1.png";
import Image from "next/image";

const Carts = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"100px"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"100px"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"100px"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"100px"}
            layout="responsive"
            src={web1}
          />
        </div>
      </div>
    </>
  );
};

export default Carts;
