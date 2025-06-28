import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-16 pt-20 pb-10 font-poppins">
      {/* Left Vertical Sidebar */}
      <div className="absolute left-0 bottom-1/2 transform -rotate-90 origin-bottom-left text-xs tracking-widest text-white/60">
        HOMEPAGE
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-14">
        {/* Logo & Newsletter */}
        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">Ashley.</h1>
          <p className="text-gray-400 mb-4">Subscribe our newsletter:</p>

          <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden w-full max-w-md transition-all duration-300 focus-within:bg-white">
            <input
              type="email"
              placeholder="ENTER OUR EMAIL"
              className="bg-transparent w-full px-6 py-3 text-sm tracking-wider placeholder:text-gray-400 text-white focus:text-black focus:placeholder:text-black outline-none"
            />
            <button className="bg-[#ff9900] text-black p-3 rounded-full m-1 transition hover:scale-105">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="flex-1 flex flex-col md:flex-row gap-10 justify-between">
          {/* Main Menu */}
          <div className="flex flex-col gap-3 text-[17px]">
            {["Home", "Portfolio", "Services", "Contact", "Blog"].map((item, idx) => (
              <span
                key={idx}
                className={`cursor-pointer transition hover:text-orange-500 ${
                  item === "Home"
                    ? "text-orange-500 font-semibold"
                    : "text-white"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-3 text-[15px] text-white/50">
            {["Privacy Policy", "Terms and conditions", "Cookie Policy", "Careers"].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="flex-1 grid grid-cols-2 gap-10 text-sm text-white/70">
          <div>
            <h3 className="text-white font-semibold mb-2">Canada</h3>
            <p>
              71 South Los Carneros<br />
              Road, California<br />
              +51 174 705 812
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Germany</h3>
            <p>
              Leehove 40, 2678 MC<br />
              De Lier, Netherlands<br />
              +31 174 705 811
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-16 flex-col sm:flex-row gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6 text-xl">
          <FaBehance className="hover:text-orange-500 cursor-pointer transition" />
          <FaDribbble className="hover:text-orange-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
          <FaGithub className="hover:text-orange-500 cursor-pointer transition text-white" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © Copyright 2023 – Mil. All Rights Reserved.
        </p>
      </div>

      {/* Back to Top (right vertical) */}
      <div className="absolute right-2 top-1/2 transform rotate-90 origin-top-right text-xs tracking-widest text-white/60">
        BACK TO TOP
      </div>

      {/* Scroll To Top Floating Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-[#1a1a1a] text-white rounded-full p-3 hover:bg-white hover:text-black transition"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
