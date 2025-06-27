import React from "react";
import { FaBehance, FaGlobe, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section: Logo & Subscribe */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">Ashley.</h1>
          <div className="mt-8">
            <p className="uppercase text-sm mb-2 text-gray-400">Subscribe our newsletter:</p>
            <div className="flex border border-white rounded-full overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="bg-transparent px-4 py-2 w-full outline-hidden text-sm placeholder:text-white"
              />
              <button className="bg-orange-500 px-4 py-2 text-white text-lg">→</button>
            </div>
          </div>
        </div>

        {/* Center Navigation Menu */}
        <div className="flex-1 text-center lg:text-left">
          <nav className="flex flex-col md:flex-row justify-center gap-4 text-sm">
            {["Home", "Portfolio", "Services", "Contact", "Blog"].map((item, index) => (
              <span
                key={index}
                className={`cursor-pointer hover:text-orange-500 ${
                  item === "Home" ? "text-orange-500 font-semibold" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <FaBehance className="hover:text-orange-500 cursor-pointer" />
            <FaGlobe className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaGithub className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Right Section: Locations */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <h3 className="text-white font-semibold mb-2">Canada</h3>
            <p>35 King Street West,<br />Toronto, ON M5H 1G4<br />+1 416 123 4567</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Germany</h3>
            <p>Alexanderplatz 1,<br />10178 Berlin<br />+49 30 123456</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © Copyright 2023 - Mil. All Rights Reserved.
      </div>
    </footer>
  );
}
