import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Header = () => {
  const { t, i18n } = useTranslation("header");
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow">
      <div className="font-bold text-xl">
        <span className="text-white">{t("title")}</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm uppercase">
        <li>
          <Link to="/" className="hover:text-orange-400 cursor-pointer">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400 cursor-pointer">
            {t("contact")}
          </Link>
        </li>
        <li>
          <Link to="/aboutUs" className="hover:text-orange-400 cursor-pointer">
            {t("about")}
          </Link>
        </li>
        <li>
          <Link to="/sermon" className="hover:text-orange-400 cursor-pointer">
            {t("sermon")}
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-orange-400 cursor-pointer">
            {t("blog")}
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 relative">
        <Link
          to="/signup"
          className="bg-orange-200 text-black px-4 py-2 rounded-md font-semibold hover:bg-orange-300 transition"
        >
          {t("signup")}
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-500 transition"
          >
            {i18n.language.toUpperCase()} ▼
          </button>
          {open && (
            <div className="absolute right-0 mt-1 w-20 bg-gray-800 rounded shadow-lg z-10">
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-3 py-1 hover:bg-gray-600"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("de")}
                className="block w-full text-left px-3 py-1 hover:bg-gray-600"
              >
                DE
              </button>
              <button
                onClick={() => changeLanguage("fa")}
                className="block w-full text-left px-3 py-1 hover:bg-gray-600"
              >
                FA
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
