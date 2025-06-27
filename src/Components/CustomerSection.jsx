import React, { useState } from "react";
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
    text: "This creative agency stands out with their exceptional talent and expertise..."
  },
  {
    name: "Daniel Smith",
    company: "NHI INC.",
    image: img2,
    text: "Absolutely fantastic team to work with! Their creativity and professionalism..."
  },
  {
    name: "Jessica Lee",
    company: "ENVATO MARKET",
    image: img3,
    text: "Highly innovative team! Their design and development skills exceeded expectations..."
  },
];

export default function CustomerSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#fdfaf7] py-24 px-6 lg:px-32 font-poppins text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-2 italic">
          Customer reviews are a valuable source of inspiration and trust.
        </p>
        <h2 className="text-5xl font-cormorant text-black leading-tight mb-10">
          <span className="font-semibold">Customer</span> Voices<br />
          <span className="text-[#c7a17a]">Hear What They Say</span>
        </h2>

        {/* Avatar Row */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Customer ${index}`}
              onClick={() => setSelected(index % testimonials.length)}
              className={`w-16 h-16 rounded-full object-cover border-2 transition-all duration-300 cursor-pointer ${
                selected === index % testimonials.length
                  ? "border-[#c7a17a] scale-105"
                  : "border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Box */}
        <div className="bg-white px-6 py-8 lg:px-12 lg:py-10 rounded-2xl shadow-lg transition-all duration-500 max-w-3xl mx-auto">
          <img
            src={testimonials[selected].image}
            alt={testimonials[selected].name}
            className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-[#c7a17a]"
          />
          <p className="text-lg text-gray-700 italic mb-6">
            “{testimonials[selected].text}”
          </p>
          <h4 className="text-xl font-semibold text-black">
            {testimonials[selected].name}
          </h4>
          <p className="text-sm text-[#c7a17a]">{testimonials[selected].company}</p>
        </div>
      </div>
    </section>
  );
}
