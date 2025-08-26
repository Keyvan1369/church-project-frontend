import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
 <footer className="bg-[#141414] text-gray-300 px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Logo + Info */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">{`{Finsweet}`}</h2>
        <p className="text-sm">A church that's relevant</p>
        <p className="text-sm">123 Main Street, Vienna</p>
        <p className="text-sm">info@finsweet.com</p>
        <p className="text-sm">+43 123 456 789</p>
      </div>

      {/* Middle: Quicklinks + Social */}
      <div>
        <h3 className="text-white font-semibold mb-3">Quicklinks</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-orange-400 cursor-pointer">About Us</li>
          <li className="hover:text-orange-400 cursor-pointer">Sermons</li>
          <li className="hover:text-orange-400 cursor-pointer">Events</li>
          <li className="hover:text-orange-400 cursor-pointer">Blog</li>
        </ul>
        <div className="flex gap-3 mt-4">
          <FaTwitter className="cursor-pointer hover:text-orange-400" />
          <FaFacebook className="cursor-pointer hover:text-orange-400" />
          <FaInstagram className="cursor-pointer hover:text-orange-400" />
        </div>
      </div>

      {/* Right: Newsletter */}
      <div>
        <h3 className="text-white font-semibold mb-3">
          Subscribe to get latest updates and news
        </h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 rounded-l-md focus:outline-none text-black"
          />
          <button className="bg-orange-400 px-4 py-2 rounded-r-md font-semibold hover:bg-orange-500 transition">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};
