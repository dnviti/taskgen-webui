"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Flag from 'react-world-flags';
import { useTheme } from '@/context/ThemeContext';

const options = [
  { value: 'en', label: 'English', flag: 'GB' },
  { value: 'es', label: 'Español', flag: 'ES' },
  { value: 'it', label: 'Italiano', flag: 'IT' },
  { value: 'de', label: 'Deutsch', flag: 'DE' },
  { value: 'fr', label: 'Français', flag: 'FR' },
  { value: 'ru', label: 'Русский', flag: 'RU' },
  { value: 'zh', label: '中文', flag: 'CN' },
  { value: 'ja', label: '日本語', flag: 'JP' },
  { value: 'ko', label: '한국어', flag: 'KR' },
  { value: 'hi', label: 'हिन्दी', flag: 'IN' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  //const router = useRouter();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (option: { value: string; label: string }) => {
    i18n.changeLanguage(option.value);
    //router.push(router.pathname, router.pathname, { locale: option.value });
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === i18n.language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [switcherRef]);

  return (
    <div ref={switcherRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white dark:bg-gray-700 p-2 rounded"
      >
        <Flag code={selectedOption?.flag || 'GB'} style={{ marginRight: 8, width: 20, height: 14 }} />
        <span className="text-gray-800 dark:text-gray-200">{selectedOption?.label}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-10">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => changeLanguage(option)}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Flag code={option.flag} style={{ marginRight: 8, width: 20, height: 14 }} />
              <span className="text-gray-800 dark:text-gray-200">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
