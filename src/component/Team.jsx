import React from 'react'
///make dynamic later

export const Team = () => {
  return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Inspirational Team</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">    
          {[
            { name: "Reid Brown", role: "Pastor", img: "/images/team1.jpg" },
            { name: "Danielle Watkins", role: "Coordinator", img: "/images/team2.jpg" },
            { name: "Nigam Chang", role: "Youth Leader", img: "/images/team3.jpg" },
            { name: "Santos Jovino", role: "Music Director", img: "/images/team4.jpg" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
  )
}
