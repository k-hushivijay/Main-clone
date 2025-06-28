import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.white-section');
      let light = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          light = true;
        }
      });

      setIsLightSection(light);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className={`text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
            isLightSection && !menuOpen ? 'text-black' : 'text-white'
          }`}
        >
          A.
        </div>

        {/* Hamburger Icon */}
        <button
          className="relative w-8 h-8 flex items-center justify-center z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="absolute w-6 h-[2px] bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(45deg)' : 'translateY(-8px)',
            }}
          />
          <div
            className={`absolute w-6 h-[2px] bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div className="absolute w-6 h-[2px] bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(-45deg)' : 'translateY(8px)',
            }}
          />
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center text-4xl space-y-10 font-light tracking-wide transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['Homepage', 'Portfolio', 'Services', 'Newsletter'].map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`opacity-0 translate-x-[-30px] transition-all duration-500 delay-[${i * 100}ms] ${
              menuOpen ? 'opacity-100 translate-x-0' : ''
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
