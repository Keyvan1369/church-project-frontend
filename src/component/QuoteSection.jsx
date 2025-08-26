import React from 'react'

export const QuoteSection = () => {
  return (
      <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/church.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <p className="text-white text-2xl italic">
          "We want to serve the world around us with love and compassion."
        </p>
      </div>
    </section>
  )
}
