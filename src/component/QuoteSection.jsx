import React from "react";
import { useTranslation } from "react-i18next";

export const QuoteSection = () => {
  const { t } = useTranslation("quote"); 

  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://static.vecteezy.com/ti/fotos-kostenlos/p1/27793693-holzern-kreuz-auf-moos-kreuz-auf-gras-im-sonnenaufgang-zum-kirche-hintergrund-generativ-ai-kostenlos-foto.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <p className="text-white text-2xl italic">{t("text")}</p>
      </div>
    </section>
  );
};
