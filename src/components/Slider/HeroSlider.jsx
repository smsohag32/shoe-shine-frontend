import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./Slider.css";
// import required modules
import { Scrollbar } from "swiper/modules";
import heroData from "../../utils/heroData";

const HeroSlide = () => {
  return (
    <div className="hero mt-4">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex my-container items-center flex-col md:flex-row-reverse ">
              <div className="w-full">
                <img src={item.image} alt="" />
              </div>
              <div className="w-full h-full">
                <h1 className="text-4xl md:text-6xl font-bold">{item.title}</h1>
                <p className="text-2xl md:text-3xl font-semibold">
                  {item.subtitle}
                </p>
                <p className="text-lg">{item.description}</p>
                <div className="mt-4">
                  <button className="px-5 py-2 rounded-3xl text-white bg-green-600 transition-all">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
