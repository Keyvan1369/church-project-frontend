import { usePictureFetch } from "../app/post/PictureFetch";
import { useTranslation } from "react-i18next";

export const LoveCompassion = ({ count = 3 }) => {
  const { t } = useTranslation("love"); 
  const images = usePictureFetch(count, 1200, 800);

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
      <p className="text-gray-600 mb-10">{t("subtitle")}</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.length === 0
          ? Array.from({ length: count }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-gray-100 animate-pulse h-64"
                aria-hidden="true"
              />
            ))
          : images.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            ))}
      </div>
    </section>
  );
};
