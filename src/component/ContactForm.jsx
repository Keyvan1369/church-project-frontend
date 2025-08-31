import React, { useState } from "react";
import { contactService } from "../api/contactService";
import { LocationMap } from "./LocationMap";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation("contact");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    contactService(email, subject, message);
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/contorno-de-cruz-crista-no-fundo-do-por-do-sol-amarelo-nas-montanhas_296704-256.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 py-12 lg:py-20 px-6 mx-auto max-w-screen-md w-full">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-white">
          {t("title")}
        </h2>
        <p className="mb-10 text-center text-gray-200 sm:text-lg">
          {t("subtitle")}
        </p>

        <form className="space-y-6 mb-10" onSubmit={formHandler}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              {t("emailLabel")}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              {t("subjectLabel")}
            </label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder={t("subjectPlaceholder")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              {t("messageLabel")}
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="6"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder={t("messagePlaceholder")}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-300 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-400 transition"
            >
              {t("submitButton")}
            </button>
          </div>
        </form>

        <LocationMap />
      </div>
    </section>
  );
};
