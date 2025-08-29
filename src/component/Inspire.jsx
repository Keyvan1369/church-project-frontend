import { useTranslation } from "react-i18next";

export const Inspire = () => {
  const { t } = useTranslation("inspire"); 

  const cards = [
    { title: t("card1.title"), desc: t("card1.desc") },
    { title: t("card2.title"), desc: t("card2.desc") },
    { title: t("card3.title"), desc: t("card3.desc") },
  ];

  return (
    <section className="py-16 bg-orange-50 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("title")}</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
