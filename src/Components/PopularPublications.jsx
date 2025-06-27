import React from "react";
import pub1 from "../assets/Publication1.jpg";
import pub2 from "../assets/Publication2.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function PopularPublications() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 relative">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-light mb-12 uppercase">
        <span className="font-semibold">Popular</span> Publications:
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col gap-4">
          <img src={pub1} alt="Publication 1" className="w-full h-auto rounded-lg shadow-md" />
          <p className="text-orange-500 text-xs font-semibold tracking-wide">TECHNOLOGY</p>
          <p className="text-sm text-gray-500">MAY 24 2023</p>
          <h3 className="text-xl font-semibold">
            How to Become a Graphic Designer in 10 Simple Steps
          </h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel urna in metus.
          </p>
          <button className="text-black font-medium inline-flex items-center gap-2 group">
            Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4">
          <img src={pub2} alt="Publication 2" className="w-full h-auto rounded-lg shadow-md" />
          <p className="text-orange-500 text-xs font-semibold tracking-wide">TECHNOLOGY</p>
          <p className="text-sm text-gray-500">MAY 24 2023</p>
          <h3 className="text-xl font-semibold">
            16 Best Graphic Design Online and Offline Courses
          </h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel urna in metus.
          </p>
          <button className="text-black font-medium inline-flex items-center gap-2 group">
            Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
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
