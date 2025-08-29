import React from "react";
import { useTranslation } from "react-i18next";

export const QuoteSection = () => {
  const { t } = useTranslation("quote"); 

  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/church.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <p className="text-white text-2xl italic">{t("text")}</p>
      </div>
    </section>
  );
};
