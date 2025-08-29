/* import { usePictureFetch } from "../app/post/PictureFetch"; */
import { useTranslation } from "react-i18next";

export const LoveCompassion = ({ count = 3 }) => {
  const { t } = useTranslation("love"); 
  /* const images = usePictureFetch(count, 1200, 800); */
  const images = [
  { id: 1, src: "https://rockc.creedle.io/images/191/wer-ist-jesus-christus-fuer-mich_1280x1280.webp", alt: "jesus image" },
  { id: 2, src: "https://media.istockphoto.com/id/802249868/de/foto/cross.jpg?s=612x612&w=0&k=20&c=pd55T-6MKySm4xZyUWETzGWvo9vn5HxOQ3I_sAQ6lWQ=", alt: "kind and jesus image" },
  { id: 3, src: "https://st5.depositphotos.com/18365422/63899/i/450/depositphotos_638999714-stock-photo-silhouettes-hands-reaching-out-hope.jpg", alt: "Third image" },
];

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
