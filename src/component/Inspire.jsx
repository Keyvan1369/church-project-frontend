import React from 'react'

export const Inspire = () => {
  return (
      <section className="py-16 bg-orange-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Share, Inspire, Innovate</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Share</h3>
          <p className="text-gray-600">Spread positivity in your community.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Inspire</h3>
          <p className="text-gray-600">Encourage others through faith.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Innovate</h3>
          <p className="text-gray-600">Bring fresh ideas to the mission.</p>
        </div>
      </div>
    </section>
  )
}
