import React from "react";
import img1 from "../assets/4image.jpg";
import img2 from "../assets/5image.jpg";
import img3 from "../assets/6image boy.jpg";
import img4 from "../assets/7image.jpg";

const MeetTeamSection = () => {
  return (
    <section className="bg-white text-black py-24 px-6 lg:px-32 font-poppins relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Text */}
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl font-cormorant leading-tight">
            Meet <br />
            <span className="text-[#c7a17a] font-light">Our</span> Team
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We are talented individuals who are passionate about bringing ideas to life.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Together, our creative team is committed to delivering impactful work.
          </p>
          <button className="bg-[#c7a17a] text-black font-semibold rounded-full px-6 py-3 flex items-center gap-3 transition hover:scale-105 duration-300">
            READ MORE
            <span className="bg-black text-[#c7a17a] p-2 rounded-full text-sm">→</span>
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[img1, img2, img3, img4].map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-3/4 overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`Team Member ${idx + 1}`}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-right text-sm text-gray-400 italic mt-8 mr-10">
        * The founders of our agency
      </p>
    </section>
  );
};

export default MeetTeamSection;
