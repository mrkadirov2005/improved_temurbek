import  { useState } from 'react';
import Button from '../buttons/Button';
import './EduVisionHeader.css';

const HeaderS = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="  z-20  eduvision-header flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-4 shadow-2xl !shadow-gray-800">
      {/* Logo and Mobile Toggle */}
      <div className="w-full md:w-auto flex items-center justify-between">
        <img src="/logo.png" className="w-[60px] sm:w-[70px] md:w-[80px]" alt="Logo" />
        
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen
                ? 'M6 18L18 6M6 6l12 12' // X icon
                : 'M4 6h16M4 12h16M4 18h16' // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Nav Links and Buttons Container */}
      <div className={`${menuOpen ? 'flex' : 'hidden'} w-full md:w-auto md:flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0`}>
        {/* Nav Links */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <a href="/#main" className="text-sm sm:text-base hover:text-blue-600 transition-colors">Asosiy</a>
          <a href="/courses" className="text-sm sm:text-base hover:text-blue-600 transition-colors">Kurslar</a>
          <a href="/#teachers" className="text-sm sm:text-base hover:text-blue-600 transition-colors">Ustozlar</a>
          <a href="/#results" className="text-sm sm:text-base hover:text-blue-600 transition-colors">Natijalar</a>
        </nav>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 md:mt-0">
          <Button data="Bog'lanish"  />
          <Button data="Kursga yozilish"  />
        </div>
      </div>
    </header>
  );
};

export default HeaderS;