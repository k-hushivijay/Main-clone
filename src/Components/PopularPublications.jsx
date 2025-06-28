import React from "react";
import pub1 from "../assets/Publication1.jpg";
import pub2 from "../assets/Publication2.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function PopularPublications() {
  const cards = [
    {
      img: pub1,
      title: "How to Become a Graphic Designer in 10 Simple Steps",
    },
    {
      img: pub2,
      title: "16 Best Graphic Design Online and Offline Courses",
    },
  ];

  return (
    <section className="bg-white text-black py-24 px-6 md:px-20 font-poppins">
      {/* Header + View All */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-light uppercase">
          <span className="font-bold">Popular</span> Publications:
        </h2>

        {/* View All */}
        <button className="flex items-center gap-3 group">
          <span className="text-xs font-semibold tracking-widest uppercase text-black">
            View All
          </span>
          <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black">
            <FaArrowRight className="text-black group-hover:text-white transition duration-300" />
          </div>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col gap-4 group max-w-xl"
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase">
              Technology
            </p>
            <p className="text-sm text-gray-500">May 24 2023</p>
            <h3 className="text-xl font-semibold leading-snug">{card.title}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel urna in metus.
            </p>

            {/* Read More */}
            <div className="flex items-center gap-3 group cursor-pointer w-fit">
              <span className="text-sm font-medium text-black group-hover:text-black">
                Read More
              </span>
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300">
                <FaArrowRight className="text-black group-hover:text-white transition duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition"
        title="Back to top"
      >
        ↑
      </button>
    </section>
  );
}
