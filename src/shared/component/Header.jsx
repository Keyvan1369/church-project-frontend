import React from 'react'

export const Header = () => {
  return (
        <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow">
      {/* Logo */}
      <div className="font-bold text-xl">
        <span className="text-white">{`{Finsweet}`}</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-sm uppercase">
        <li className="hover:text-orange-400 cursor-pointer">Home</li>
        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="hover:text-orange-400 cursor-pointer">Sermon</li>
        <li className="hover:text-orange-400 cursor-pointer">Blog</li>
      </ul>

      {/* Button */}
      <button className="bg-orange-200 text-black px-4 py-2 rounded-md font-semibold hover:bg-orange-300 transition">
        Contact Us
      </button>
    </nav>
  );
};

