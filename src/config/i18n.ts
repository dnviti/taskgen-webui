// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translations from your backend or static files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language if detected language is not available
    debug: true, // Enable debug mode for development (can be turned off in production)
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for server-side rendering
    },
  });

export default i18n;
