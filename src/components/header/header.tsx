import { useState } from 'react';
import Button from '../buttons/Button';
import './EduVisionHeader.css';

const HeaderS = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  bg-white shadow-2xl rounded-4xl shadow-gray-200 px-4 sm:px-6 md:px-10 py-4 transition-all">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-[50px] sm:w-[60px] md:w-[70px]" />
          <span className="text-xl sm:text-2xl font-bold text-blue-600">EduVision</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12' // X icon
                  : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Nav + Buttons */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex absolute navnav mt-5 md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex-col md:flex-row items-center gap-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300`}
        >
          {/* Navigation */}
          <nav className="  flex flex-col md:flex-row items-center gap-4 md:gap-6 text-gray-700 font-medium">
            <a  href="/#main" className=" header_link hover:text-blue-600 transition">Asosiy</a>
            <a  href="/courses" className=" header_link hover:text-blue-600 transition">Kurslar</a>
            <a  href="/#teachers" className=" header_link hover:text-blue-600 transition">Ustozlar</a>
            <a  href="/#results" className=" header_link hover:text-blue-600 transition">Natijalar</a>
            <a  href="/test" className=" header_link hover:text-blue-600 transition">Sinov</a>
            <a  href="/temurbek_ai" className=" header_link hover:text-blue-600 transition">Temurbek AI</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 md:mt-0">
            <Button data="Bog'lanish" />
           <a href="/courses"> <Button data="Kursga yozilish" /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderS;
