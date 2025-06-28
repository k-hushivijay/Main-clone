import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamImage from "../assets/1image.jpg";
import womanImage from "../assets/2image.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function StudioSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".studio-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".studio-text",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".studio-image img",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".studio-image",
            start: "top 85%",
          },
        }
      );

      gsap.from(".girl-profile", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".girl-profile",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white w-full py-20 px-4 lg:px-24 overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 studio-text">
          <h2 className="text-5xl lg:text-6xl font-cormorant font-bold leading-tight text-black mb-8">
            Discover <br />
            <span className="text-black font-light">Our Studio</span>
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

          {/* Profile Section */}
          <div className="flex items-center gap-4 girl-profile">
            <div className="relative w-16 h-16">
              <img
                src={womanImage}
                alt="team member"
                className="w-full h-full rounded-full object-cover border-2 border-[#f5a623]"
              />
              {/* Yellow pause icon */}
              <div className="absolute bottom-0 right-0 bg-[#f5a623] w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ||
              </div>
            </div>
            <div className="text-left">
              <p className="text-base text-black">
                <span className="font-semibold">Passionately Creating</span> Design
              </p>
              <p className="text-sm text-gray-500">
                Wonders: <span className="font-semibold text-black">Unleashing</span> Boundless
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end studio-image">
          <div className="w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-md">
            <img
              src={teamImage}
              alt="Studio team"
              className="object-cover w-full h-full transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
