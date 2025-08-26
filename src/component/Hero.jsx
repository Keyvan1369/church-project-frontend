import React from "react";

export const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Become a part of our community
        </h1>
        <p className="mb-6 text-lg">
          Join us in worship, faith, and service for a better tomorrow.
        </p>
      </div>
    </section>
  );
};
