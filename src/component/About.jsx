import React from 'react'

const cards = [
  { title: "About Us", desc: "Learn who we are" },
  { title: "Get Involved", desc: "Join our mission" },
  { title: "Giving Back", desc: "Support our community" },
];

export const About = () => {
  return (
        <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">A Church That’s Relevant</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
