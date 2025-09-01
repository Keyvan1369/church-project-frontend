import { FaTelegram, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import { MdChurch } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-[#141414] text-gray-300 px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <ul className="flex space-x-10 flex-wrap  gap-4 text-sm justify-center md:justify-start">
            <li>
              <Link
                to="/aboutUs"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                to="/sermon"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                {t("sermons")}
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                {t("events")}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-orange-400 cursor-pointer transition-colors duration-200"
              >
                {t("blog")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/jesus_haus_wien?igsh=Z3pnb2YzY2w3azVx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={25}
              className="hover:text-orange-400 cursor-pointer"
            />
          </a>
          <a
            href="https://t.me/+Uep8NiwD1otsfm0m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram
              size={25}
              className="hover:text-orange-400 cursor-pointer"
            />
          </a>
        </div>

        <div className="flex items-start gap-9 md:justify-end">
          <MdChurch size={50} className="text-orange-400 flex-shrink-0" />
          <div className="text-sm space-y-1.5  text-right">
            <h2 className="text-lg font-bold text-white">{t("name")}</h2>
            <p>{t("addressLine1")}</p>
            <p>{t("addressLine2")}</p>
            <p>{t("email")}</p>
            <p>{t("phone")}</p>
          </div>
        </div>
      </div>
    </footer>  
  );
};
