import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation("call"); 

  return (
   <section
  className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white px-6"
  style={{
    backgroundImage:
      "url('https://bistum-regensburg.de/fileadmin/tt_news_import/200426_Dritter_Sonntag_Osterzeit_Dom_UEbersichtsbild.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
      {t("title")}
    </h2>
    <p className="mb-6 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
      {t("subtitle")}
    </p>
  </div>
</section>

  );
};
