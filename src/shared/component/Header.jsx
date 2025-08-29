import React from "react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow">
      <div className="font-bold text-xl">
        <span className="text-white">Iranian church</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm uppercase">
        <li>
          <Link to="/" className="hover:text-orange-400 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400 cursor-pointer">
          Contact Us
          </Link>
        </li>
        
        <li>
          {" "}
          <Link to="/aboutUs" className="hover:text-orange-400 cursor-pointer">
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/sermon" className="hover:text-orange-400 cursor-pointer">
            Sermon
          </Link>
        </li>
        <Link to="/blog" className="hover:text-orange-400 cursor-pointer">
          Blog
        </Link>
      </ul>

      <button className="bg-orange-200 text-black px-4 py-2 rounded-md font-semibold hover:bg-orange-300 transition">
        <Link to="/signup">signup/login</Link>
      </button>
    </nav>
  );
};
