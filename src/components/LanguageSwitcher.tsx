// src/components/LanguageSwitcher.tsx
"use client";

import { useTranslation } from 'react-i18next';
//import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    //const router = useRouter();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        //router.push(router.pathname, router.pathname, { locale: lng });
    };

    return (
        <div className="flex space-x-4">
            <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">English</button>
            <button onClick={() => changeLanguage('es')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Español</button>
            <button onClick={() => changeLanguage('it')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Italiano</button>
            <button onClick={() => changeLanguage('de')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Deutsch</button>
            <button onClick={() => changeLanguage('fr')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Français</button>
            <button onClick={() => changeLanguage('ru')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Русский</button>
            <button onClick={() => changeLanguage('zh')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">中文</button>
            <button onClick={() => changeLanguage('ja')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">日本語</button>
            <button onClick={() => changeLanguage('ko')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">한국어</button>
            <button onClick={() => changeLanguage('hi')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">हिन्दी</button>
        </div>
    );
};

export default LanguageSwitcher;
