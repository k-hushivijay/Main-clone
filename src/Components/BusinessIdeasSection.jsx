import React, { useState } from "react";
import capsuleImage from "../assets/3image.jpg";

const services = [
  {
    title: "Branding and Identity Design",
    description: "At our agency, we have a unique approach to web..."
  },
  {
    title: "Website Design and Development",
    description: "We craft responsive, user-friendly websites that drive results."
  },
  {
    title: "Advertising and Marketing Campaigns",
    description: "We strategize and execute compelling campaigns that convert."
  },
  {
    title: "Creative Consulting and Development",
    description: "Collaborating to turn your innovative ideas into reality."
  }
];

const BusinessSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-48 h-20 bg-[#c7a17a] rounded-full overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src={capsuleImage}
              alt="Capsule"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-cormorant leading-snug">
              <span className="text-white font-semibold">Unique</span> Ideas<br />
              For <span className="text-white font-semibold">Your</span> Business.
            </h2>
          </div>

          <div>
            <button className="bg-[#c7a17a] text-black font-semibold rounded-full px-6 py-3 flex items-center gap-3 transition hover:scale-105 duration-300">
              WHAT WE DO
              <span className="bg-black text-[#c7a17a] p-2 rounded-full text-sm">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="bg-zinc-900 p-6 rounded-2xl shadow-md cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p
                className={`text-gray-400 text-sm transition-all duration-300 ease-in-out ${
                  hoverIndex === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
