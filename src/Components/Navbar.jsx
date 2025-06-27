import { useState } from 'react';
import '../Styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 font-sans text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-extrabold tracking-tight text-white">A.</div>

        {/* Hamburger Icon */}
        <button
          className="relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Top bar */}
          <span
            className={`navbar-line navbar-line-top ${menuOpen ? 'open' : ''}`}
          />
          {/* Middle bar */}
          <span
             className={`navbar-line navbar-line-mid ${menuOpen ? 'open' : ''}`}
          />
          {/* Bottom bar */}
          <span
             className={`navbar-line navbar-line-bot ${menuOpen ? 'open' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-10 text-4xl font-light tracking-wide transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['Homepage', 'Portfolio', 'Services', 'Newsletter', 'Otherpages'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
