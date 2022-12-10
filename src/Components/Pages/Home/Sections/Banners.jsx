import facebook from "../../../../assest/facebook_btgvz5ljh0so.svg";
import React from "react";
import Typewriter from "typewriter-effect";
import bannerImg from "../../../../assest/bannerImg.svg";
import "./Banner.css";

const Banners = () => {
  return (
    <div className="container mx-auto p-5 sm:text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        <div>
          <div
            className="text-4xl font-bold max-w-md relative"
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
        </div>
        <div className="">
          <img className="max-w-xl" src={bannerImg} alt="" />
        </div>
      </div>
      <div className="social_section pt-24">
        <p className="font-thin text-xl mb-12">Explore More</p>
        <a target={"_blank"} href="https://www.facebook.com/naffiiziiqbal">
          <i className="social_icons fa-brands fa-facebook-f"></i>
        </a>

        <a target={"_blank"} href="https://linkedin.com/in/naffiziqbal">
          {" "}
          <i className="social_icons fa-brands fa-linkedin-in"></i>
        </a>

        <a href="https://instagram.com/naffiziqbal" target={"_blank"}>
          <i className="social_icons fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Banners;
