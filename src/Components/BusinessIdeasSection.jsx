import React, { useState } from "react";
import capsuleImage from "../assets/3image.jpg";

const services = [
  {
    title: "Branding and Identity Design",
    description: "Our creative agency is a team of professionals focused on helping you..."
  },
  {
    title: "Website Design and Development",
    description: "Our creative agency is a team of professionals focused on helping you..."
  },
  {
    title: "Advertising and Marketing Campaigns",
    description: "Our creative agency is a team of professionals focused on helping you..."
  },
  {
    title: "Creative Consulting and Development",
    description: "Our creative agency is a team of professionals focused on helping you..."
  }
];

export default function BusinessSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6 lg:px-32 font-poppins relative">
      {/* Top description */}
      <p className="text-center lg:text-right text-sm md:text-base text-gray-400 mb-4 lg:mb-0 absolute top-8 right-10 z-10">
        Professionals focused on helping your brand grow and move forward.
      </p>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Heading & Capsule */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Capsule image */}
          <div className="rounded-full w-40 h-20 overflow-hidden bg-yellow-500 flex items-center justify-center shadow-md">
            <img
              src={capsuleImage}
              alt="Capsule"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-cormorant leading-snug">
              <span className="font-semibold">Unique</span> Ideas <br />
              For <span className="font-semibold">Your</span> Business<span className="text-white">.</span>
            </h2>
          </div>

          {/* Button */}
          <div className="rounded-full">
  <button className="group flex items-center bg-[#f39703] hover:bg-[#ffc04d] px-7 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-black font-medium tracking-wide uppercase text-sm font-poppins shadow-md">
    WHAT WE DO
    <span className="ml-3 bg-black text-[#f39703] group-hover:text-[#ffc04d] rounded-full w-7 h-7 flex items-center justify-center transition duration-300 text-sm font-bold">
      →
    </span>
  </button>
</div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative bg-black border border-neutral-800 rounded-xl p-6 h-64 overflow-hidden transition-all duration-300 ease-in-out group cursor-pointer"
            >
              {/* Yellow Top Line */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-[#f5a623] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out 
                  ${hoverIndex === index ? "scale-x-100" : ""}`}
              ></div>

              {/* Title */}
              <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>

              {/* Description */}
              <p
                className={`text-sm text-gray-400 transition-opacity duration-300 ease-in-out ${
                  hoverIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.description}
              </p>

              {/* Arrow icon bottom right */}
              <div className="absolute bottom-4 right-4">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm 
                    transition-all duration-300 ease-in-out
                    ${hoverIndex === index
                      ? "bg-[#f5a623] text-black scale-110"
                      : "bg-zinc-700 text-white"
                    }`}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
