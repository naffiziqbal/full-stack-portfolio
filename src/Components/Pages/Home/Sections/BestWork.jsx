import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BestWork = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./public/works.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="p-5 container mx-auto">
      <h3 className="text-4xl font-semibold text-center  text-primary">
        My Best Work
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {data.map((data) => (
          <div key={data.id} className="card  bg-base-100 shadow-xl">
            <figure>
              <PhotoProvider>
                <PhotoView src={data.Img}>
                  <img src={data.Img} alt="" />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.description}</p>
              <div className="card-actions justify-end">
                <button>
                  <a target={"_blank"} href={data.link}>
                    visit
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWork;
