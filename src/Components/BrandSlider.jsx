import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Envato_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/IBM_logo.svg/1280px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
];

export default function BrandSlider() {
  return (
    <section className="bg-white py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // Smooth continuous speed
        allowTouchMove={false}
        grabCursor={false}
        className="flex items-center"
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "100px" }}
            className="flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-5 w-auto opacity-70 hover:opacity-100 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
