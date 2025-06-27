import React from "react";
import teamImage from "../assets/1image.jpg";
import womanImage from "../assets/2image.jpg";

export default function StudioSection() {
  return (
    <section className="relative w-full bg-white py-24 px-6 lg:px-32 font-poppins">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-6xl font-cormorant font-bold leading-tight text-black mb-8">
            Discover <br />
            <span className="text-[#c7a17a] font-light">Our Studio</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            At our design studio, we are a collective of talented individuals ignited
            by our unwavering passion for transforming ideas into reality. With a
            harmonious blend of diverse backgrounds and a vast array of skill sets, we
            join forces to create compelling solutions for our esteemed clients.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Collaboration is at the heart of what we do. Our team thrives on the
            synergy that arises when unique perspectives converge, fostering an
            environment of boundless creativity.
          </p>
          <div className="flex items-center gap-5">
            <img
              src={womanImage}
              alt="team member"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#c7a17a]"
            />
            <div className="text-left">
              <p className="text-base font-semibold text-black">
                Passionately Creating <span className="font-normal">Design</span>
              </p>
              <p className="text-sm text-gray-400 italic">
                Wonders: <span className="font-semibold text-black">Unleashing</span>{" "}
                Boundless Creativity
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] aspect-3/4 overflow-hidden">
            <img
              src={teamImage}
              alt="Studio team"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
