import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import { MdChurch } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-300 px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <Link
                to="/aboutUs"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/sermon"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                Sermons
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 mt-4 md:mt-0">
          {[FaTwitter, FaFacebook, FaInstagram].map((Icon, i) => (
            <Icon
              key={i}
              className="cursor-pointer text-gray-300 hover:text-orange-400 transition-transform duration-200 hover:scale-105"
              size={25}
            />
          ))}
        </div>

        <div className="flex items-start gap-3">
          <MdChurch size={50} className="text-orange-400 flex-shrink-0" />
          <div className="text-sm space-y-0.5">
            <h2 className="text-lg font-bold text-white">Iranian Church</h2>
            <p className="text-gray-400">A church that's relevant</p>
            <p className="text-gray-400">123 Main Street, Vienna</p>
            <p className="text-gray-400">info@finsweet.com</p>
            <p className="text-gray-400">+43....</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
