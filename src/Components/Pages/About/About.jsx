import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import Typewriter from "typewriter-effect";

const About = () => {
  const name = "Nafiz Iqbal";
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allworks`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className=" container mx-auto">
      <div>
        <h1 className="text-8xl font-bold opacity-10  text-center">ABOUT</h1>
        <hr className="mt-5 border-gray-700" />
      </div>
      <div className="flex justify-center items-center mt-12 flex-col">
        <img
          className="max-w-sm rounded-full border border-gray-700 mb-16"
          src="https://i.ibb.co/VY04WV4/317619319-154499960626976-8441470737664641621-n.jpg"
          alt=""
        />

        <div className="text-2xl text-accent max-w-xl space-x-2 tracking-widest font-mono h-52">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hello, I'm ${name}. A Bangladeshi Based Front-End Web Developer. I Develope Websites Using MERN  technology. My Dream is To make the virtual world more smoother.`
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
      </div>
      {/* <hr /> */}
      <div className="myWorks">
        <p className="text-8xl opacity-10 text-primary font-bold uppercase text-center underline mb-24">
          My Works
        </p>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide>
                <div key={project.id} className="card  bg-base-100 shadow-xl">
                  <figure>
                    <PhotoProvider>
                      <PhotoView src={project.Img}>
                        <img className="max-w-lg" src={project.Img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-xs btn-primary text-white">
                        <a target={"_blank"} href={project.link}>
                          visit
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
