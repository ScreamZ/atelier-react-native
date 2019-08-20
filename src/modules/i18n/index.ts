import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: require("./locales/en.json") },
  fr: { translation: require("./locales/fr.json") },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    lng: Localization.locale,
    resources,
    saveMissing: true,
  });

export default i18n;
