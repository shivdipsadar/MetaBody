import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Make sure this is installed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">METABODY</span>
          <span className="bg-yellow-400 text-black px-1 ml-1">WORKS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#WhoWeAre" className="hover:text-yellow-400">Who We Are</a></li>
          <li><a href="#MeetTheTeam" className="hover:text-yellow-400">Meet the Team</a></li>
          <li><a href="#Classes" className="hover:text-yellow-400">Classes</a></li>
          <li><a href="#Memberships" className="hover:text-yellow-400">Memberships</a></li>
        </ul>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 font-semibold rounded hover:bg-yellow-300 transition">
          Contact
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          ) : (
            <Menu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm uppercase tracking-wide">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#WhoWeAre" className="hover:text-yellow-400">Who We Are</a>
          <a href="#MeetTheTeam" className="hover:text-yellow-400">Meet the Team</a>
          <a href="#Classes" className="hover:text-yellow-400">Classes</a>
          <a href="#Memberships" className="hover:text-yellow-400">Memberships</a>
          <a
            href="#Contact"
            className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded hover:bg-yellow-300 transition w-fit"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
