import React from "react";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation("team");

  const members = [
    { name: "Saeed mir Hosseini", role: t("roles.pastor"), img: "/images/team1.jpg" },
    { name: "Afshar Aliyadeh", role: t("roles.coordinator"), img: "/images/team2.jpg" },
  
  ];

  return (   
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("title")}</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((member, i) => (
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
  );
};
