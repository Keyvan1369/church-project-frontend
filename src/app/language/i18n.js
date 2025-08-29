import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import enHero from "./en/hero.json";
import deHero from "./de/hero.json";
import faHero from "./fa/hero.json";


import enHeader from "./en/header.json";
import deHeader from "./de/header.json";
import faHeader from "./fa/header.json";


import enAbout from "./en/about.json";
import deAbout from "./de/about.json";
import faAbout from "./fa/about.json";

import enLove from "./en/love.json";
import deLove from "./de/love.json";
import faLove from "./fa/love.json";

import enBenefits from "./en/benefits.json";
import deBenefits from "./de/benefits.json";
import faBenefits from "./fa/benefits.json";

import enCall from "./en/call.json";
import deCall from "./de/call.json";
import faCall from "./fa/call.json";

import enQuote from "./en/quote.json";
import deQuote from "./de/quote.json";
import faQuote from "./fa/quote.json";

import enInspire from "./en/inspire.json";
import deInspire from "./de/inspire.json";
import faInspire from "./fa/inspire.json";

import enFooter from "./en/footer.json";
import deFooter from "./de/footer.json";
import faFooter from "./fa/footer.json";

import enContact from "./en/contact.json";
import deContact from "./de/contact.json";
import faContact from "./fa/contact.json"; 

import enTeam from "./en/team.json";
import deTeam from "./de/team.json";
import faTeam from "./fa/team.json";

import enBlog from "./en/blog.json";
import deBlog from "./de/blog.json";
import faBlog from "./fa/blog.json";


i18n
  .use(initReactI18next)
  .init({
     resources: {
    en: { hero: enHero, header: enHeader, about: enAbout, love: enLove, benefits: enBenefits, call: enCall, quote: enQuote, inspire: enInspire, footer: enFooter,contact: enContact,team: enTeam,blog: enBlog },
    de: { hero: deHero, header: deHeader, about: deAbout, love: deLove, benefits: deBenefits, call: deCall, quote: deQuote, inspire: deInspire, footer: deFooter,contact: deContact ,team: deTeam,blog: deBlog },
    fa: { hero: faHero, header: faHeader, about: faAbout, love: faLove, benefits: faBenefits, call: faCall, quote: faQuote, inspire: faInspire, footer: faFooter,contact: faContact ,team: faTeam,blog: faBlog},
  },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: { escapeValue: false },
  });

export default i18n;
