import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// وارد کردن فایل‌های ترجمه
import en from "./locales/en.json";
import fa from "./locales/fa.json";

// بازیابی زبان از localStorage
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next) // اتصال i18next به React
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: savedLanguage, // زبان اولیه از localStorage
    fallbackLng: "en", 
    debug: true, 
    interpolation: {
      escapeValue: false, // نیازی به escape کردن در React نیست
    },
  });

// تنظیم direction بر اساس زبان
document.documentElement.dir = savedLanguage === "fa" ? "rtl" : "ltr";

// ذخیره زبان هنگام تغییر
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
});

export default i18n;
