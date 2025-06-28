import React from "react";
import { FaBehance, FaDribbble, FaTwitter, FaGithub } from "react-icons/fa";
import img1 from "../assets/4image.jpg";
import img2 from "../assets/5image.jpg";
import img3 from "../assets/6image boy.jpg";
import img4 from "../assets/7image.jpg";

const teamMembers = [
  { img: img1, name: "Lisa Trueman", role: "UI/UX DESIGNER" },
  { img: img2, name: "Mark Watson", role: "PROJECT MANAGER" },
  {
    img: img3,
    name: "Oscar Freeman",
    role: "FRONTEND DEV",
  },
  { img: img4, name: "Emily Rose", role: "GRAPHIC DESIGNER" },
];

export default function MeetTeamSection() {
  return (
    <section className="bg-white text-black py-24 px-6 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Text */}
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl font-cormorant leading-tight font-bold">
            Meet <br />
            <span className="font-light text-black">Our </span>
            <span className="text-black">Team</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We are talented individuals who are passionate about bringing ideas
            to life. With a diverse range of backgrounds and skill sets, we
            collaborate to produce effective solutions for our clients.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Together, our creative team is committed to delivering impactful
            work that exceeds expectations.
          </p>
          <button className="group flex items-center bg-[#f39703] hover:bg-[#ffc04d] px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-black shadow-lg">
            READ MORE
            <span className="ml-3 bg-black text-[#f5a623] group-hover:text-[#ffc04d] rounded-full w-7 h-7 flex items-center justify-center transition duration-300">
              →
            </span>
          </button>
        </div>
       

        {/* Team Grid */}

        <div className="grid grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl aspect-[3/4] shadow-lg"
            >
              {/* Profile Image */}
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-xs text-gray-300 tracking-widest">
                    {member.role}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-lg mb-2">
                  <FaBehance className="hover:text-[#f39703] transition duration-300" />
                  <FaDribbble className="hover:text-[#f39703] transition duration-300" />
                  <FaTwitter className="hover:text-[#f39703] transition duration-300" />
                  <FaGithub className="hover:text-[#f39703] transition duration-300" />
                </div>
                {/* Yellow underline animation */}
                <div className="w-full h-1 bg-transparent group-hover:bg-[#f39703] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founders note */}
      <p className="text-right text-sm text-gray-400 italic mt-8 mr-10">
        <span className="text-orange-500">* </span>The founders of our agency
      </p>
    </section>
  );
}
