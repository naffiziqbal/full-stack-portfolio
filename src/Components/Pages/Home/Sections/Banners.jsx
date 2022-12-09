import React from "react";
import Typewriter from "typewriter-effect";
import bannerImg from "../../../../assest/bannerImg.svg";

const Banners = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        <div
          className="text-4xl font-bold max-w-md"
          style={{ color: "#BA68C8" }}
        >
          <Typewriter
            options={{
              strings: ["Nafiz Iqbal", "Front End Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="">
          <img className="max-w-xl" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
