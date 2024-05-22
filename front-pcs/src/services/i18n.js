import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { API_URL } from '../Config';
import axios from 'axios';

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'https://api.pcs.fr/langues/{{lng}}',
      crossDomain: true
      // allowMultiLoading: false,
    },
    debug: true,
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        translation: {
          "home": "home",
          "side.auth": "Authentication",
          "side.register": "Signup",
          "side.admin.account": "Account",
          "side.admin.messages": "Messages",
          "side.admin.biens": "Real-estate asset management",
          "side.admin.prestations": "Services management",
          "side.admin.bailleurs": "Lessors management",
          "side.admin.prestataires": "Service providers management",
          "side.admin.voyageurs": "Travelers management",
          "side.admin.langues": "Languages",
        }
      },
      fr: {
        translation: {
          "home": "Acceuil",
          "side.auth": "Authentification",
          "side.register": "Inscription",
          "side.admin.account": "Compte",
          "side.admin.messages": "Messages",
          "side.admin.biens": "Gestion des biens",
          "side.admin.prestations": "Gestion des prestations",
          "side.admin.bailleurs": "Gestion des bailleurs",
          "side.admin.prestataires": "Gestion des prestataires",
          "side.admin.voyageurs": "Gestion des voyageurs",
          "side.admin.langues": "Langues",
        }
      }
    }
  });

export default i18n;
