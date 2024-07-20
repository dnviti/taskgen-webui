import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-fs-backend';
import path from 'path';

const isServer = typeof window === 'undefined';

i18n
  .use(Backend) // use backend for server-side translation
  .use(HttpApi) // use HTTP backend for client-side translation
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: isServer
        ? path.join(process.cwd(), 'public/locales/{{lng}}/{{ns}}.json')
        : '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    preload: ['en', 'es', 'it', 'de', 'fr', 'ru', 'zh', 'ja', 'ko', 'hi'], // preload all languages
    ns: ['common'],
    defaultNS: 'common',
    supportedLngs: ['en', 'es', 'it', 'de', 'fr', 'ru', 'zh', 'ja', 'ko', 'hi'],
    detection: {
      order: ['cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    react: {
      useSuspense: false,
    },
    debug: false,
  });

export default i18n;