import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const HomeForm = () => {
  return (
    <>
      <div className="bg-emerald-900 text-white font-sans">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/hero-image.jpg"
              alt="Church"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lorem Ipsum Dolor Sit Amet
            </h1>
            <button className="bg-white text-emerald-900 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </section>

        <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/feature1.jpg" alt="Feature 1" className="w-full" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/feature2.jpg" alt="Feature 2" className="w-full" />
          </div>
        </section>

        <section className="px-6 md:px-20 py-12">
          <h2 className="text-3xl font-semibold mb-6">Explore</h2>
          <div className="flex gap-4 mb-6">
            <button className="bg-emerald-700 px-4 py-2 rounded">All</button>
            <button className="bg-emerald-700 px-4 py-2 rounded">
              Category 1
            </button>
            <button className="bg-emerald-700 px-4 py-2 rounded">
              Category 2
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`/explore${i}.jpg`}
                  alt={`Explore ${i}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-20 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/about.jpg"
              alt="About"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
            <button className="bg-white text-emerald-900 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </section>

        <section className="px-6 md:px-20 py-12 text-center">
          <img
            src="/magazine.jpg"
            alt="Magazine"
            className="mx-auto mb-4 w-64"
          />
          <h3 className="text-2xl font-semibold mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <button className="bg-white text-emerald-900 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition">
            Subscribe Now
          </button>
        </section>

        <footer className="bg-emerald-800 px-6 md:px-20 py-12 text-center">
          <p className="mb-4">© 2025 Your Church. All rights reserved.</p>
          <div className="flex justify-center gap-4 mb-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <form className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 rounded-l text-black"
            />
            <button className="bg-white text-emerald-900 font-semibold px-4 rounded-r">
              Subscribe
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};
