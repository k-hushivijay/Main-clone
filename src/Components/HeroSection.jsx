import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".headline span", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".cta-btn", {
        scrollTrigger: {
          trigger: ".cta-btn",
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden font-sans">
      <div className="px-6 md:px-20 lg:px-32 w-full z-10">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-light tracking-tight space-y-2 headline leading-tight">
          <span className="block font-bold text-white">Designing</span>
          <span className="block text-white">a Better</span>
          <span className="block font-bold text-white">World Today</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 max-w-xl text-base md:text-lg">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become tangible realities.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <button className="cta-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            What We Do →
          </button>
          <button className="cta-btn bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition duration-300">
            View Works →
          </button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="scroll-indicator  bottom-15 left-1/2 transform -translate-x-1/2 z-10">
  <div className="relative w-[120px] h-[120px] flex items-center justify-center">
    <div className="absolute w-full h-full animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text fill="white" fontSize="10" fontWeight="bold">
          <textPath href="#circlePath">
            • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
          </textPath>
        </text>
      </svg>
    </div>
    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center z-10">
      <span className="text-white text-xl">↓</span>
    </div>
  </div>
</div>
    </section>
  );
}
