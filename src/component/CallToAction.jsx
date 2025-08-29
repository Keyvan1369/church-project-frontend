import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation("call"); 

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
      <p className="mb-6 text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
    </section>
  );
};
