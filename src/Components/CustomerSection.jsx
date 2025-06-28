import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/4image.jpg";
import img2 from "../assets/5image.jpg";
import img3 from "../assets/6image boy.jpg";
import img4 from "../assets/7image.jpg";
import img5 from "../assets/3image.jpg";
import img6 from "../assets/1image.jpg";
import img7 from "../assets/2image.jpg";

const testimonials = [
  {
    name: "Sarah Newman",
    company: "ENVATO MARKET",
    image: img1,
    text: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },
  {
    name: "Daniel Smith",
    company: "NHI INC.",
    image: img2,
    text: "Absolutely fantastic team to work with! Their creativity and professionalism ensured our project was both innovative and successful. Highly recommended."
  },
  {
    name: "Jessica Lee",
    company: "ENVATO MARKET",
    image: img3,
    text: "Highly innovative team! Their design and development skills exceeded expectations and brought our vision to life beautifully. Amazing collaboration!"
  },
];

export default function CustomerSection() {
  const [selected, setSelected] = useState(0);

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#fdfaf7] py-24 px-6 lg:px-32 font-poppins text-center">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-cormorant text-black leading-tight mb-16">
          <span className="font-semibold">Customer </span>
          Voices:<br />
          <span className="font-semibold">Hear What </span>
          <span className="text-gray-700">They Say!</span>
        </h2>

        {/* Avatar Row */}
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => {
            const isSelected = selected === index % testimonials.length;
            return (
              <div
                key={index}
                onClick={() => setSelected(index % testimonials.length)}
                className={`rounded-full p-[2px] transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-4 border-[#f39703]"
                    : "hover:ring-2 hover:ring-white"
                }`}
              >
                <img
                  src={img}
                  alt={`Customer ${index + 1}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-white px-6 py-10 lg:px-12 lg:py-14 rounded-2xl shadow-xl max-w-4xl mx-auto transition-all duration-500">
          {/* Yellow Quote Icon */}
          <div className="text-5xl text-[#f39703] mb-4">“”</div>

          {/* Text */}
          <p className="text-lg text-gray-700 italic mb-8 max-w-3xl mx-auto">
            {testimonials[selected].text}
          </p>

          {/* Name + Company */}
          <h4 className="text-xl font-semibold text-black">
            {testimonials[selected].name}
          </h4>
          <p className="text-sm text-[#c7a17a] uppercase tracking-wide">
            {testimonials[selected].company}
          </p>

          {/* Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md transition"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
