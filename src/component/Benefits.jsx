import React from 'react'

const benefits = [
  "Build strong faith",
  "Serve the community",
  "Join inspiring groups",
  "Experience spiritual growth",
];

export const Benefits = () => {
  return (
      <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">
        The Benefits of Joining Our Church
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
