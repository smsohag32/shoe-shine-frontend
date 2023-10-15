import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import ProductCard from "../Cards/ProductCard";

const ProductSlider = ({ items }) => {
  return (
    <div data-aos="fade-up" className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={6}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className=" mySwiper"
      >
        {items &&
          items.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
