import React from "react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('https://i.swncdn.com/media/950w/via/images/2023/02/22/29578/29578-church-gettyimages-wwing_source_file.jpg ')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("title")}</h1>
        <p className="mb-6 text-lg">{t("subtitle")}</p>
      </div>
    </section>
  );
};
