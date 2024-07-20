// src/app/page.tsx
"use client";

import { TasksProvider } from "@/context/TasksContext";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import CreateTask from "@/components/CreateTask";
import DeleteTask from "@/components/DeleteTask";
import TaskList from "@/components/TaskList";
import Documentation from "@/components/Documentation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const HomeContent = () => {
  const [showDocumentation, setShowDocumentation] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-300">{t('title')}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('description')}</p>
        <div className="mt-4">
          <button
            onClick={() => setShowDocumentation(!showDocumentation)}
            className="mr-4 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white py-2 px-4 rounded"
          >
            {showDocumentation ? t('hideDocumentation') : t('showDocumentation')}
          </button>
          <button
            onClick={toggleTheme}
            className="bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 text-white py-2 px-4 rounded"
          >
            {t('toggleLightMode')}
          </button>
        </div>
        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </header>
      {showDocumentation && (
        <section className="mb-8 w-full max-w-4xl mx-auto">
          <Documentation />
        </section>
      )}
      <div className="flex flex-grow w-full space-x-8">
        <div className="flex flex-col space-y-8 flex-1" style={{ maxWidth: "40%" }}>
          <section className="w-full" title={t('fillOutFields')}>
            <CreateTask />
          </section>
          <section className="w-full" title={t('enterTaskName')}>
            <DeleteTask />
          </section>
        </div>
        <div className="flex-grow" style={{ minWidth: "60%" }}>
          <section className="w-full" title={t('viewCreatedTasks')}>
            <TaskList />
          </section>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <HomeContent />
      </TasksProvider>
    </ThemeProvider>
  );
}
