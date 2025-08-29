import React from "react";
import { useTranslation } from "react-i18next";

export const Benefits = () => {
  const { t } = useTranslation("benefits");

  const benefits = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("heading")}</h2>
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
  );
};
