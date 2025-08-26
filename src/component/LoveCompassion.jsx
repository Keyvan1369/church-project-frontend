import React from 'react'

export const LoveCompassion = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Love and Compassion</h2>
      <p className="text-gray-600 mb-10">
        Together, we spread kindness and faith across our community.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <img src="/images/love1.jpg" alt="love1" className="rounded-lg" />
        <img src="/images/love2.jpg" alt="love2" className="rounded-lg" />
        <img src="/images/love3.jpg" alt="love3" className="rounded-lg" />
      </div>
    </section>
  )
}
