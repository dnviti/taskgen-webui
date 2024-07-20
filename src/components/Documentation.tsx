// src/components/Documentation.tsx
"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const Documentation: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">{t('title')} {t('documentation')}</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('creatingTask')}</h3>
                <p>{t('createTaskInstructions')}</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>{t('taskName')}:</strong> {t('taskNameDescription')}</li>
                    <li><strong>{t('taskCommand')}:</strong> {t('taskCommandDescription')}</li>
                    <li><strong>{t('taskFrequency')}:</strong> {t('taskFrequencyDescription')}</li>
                    <li><strong>{t('taskTimerOptions')}:</strong> {t('taskTimerOptionsDescription')}</li>
                </ul>
                <p>{t('createTaskButton')}</p>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('deletingTask')}</h3>
                <p>{t('deleteTaskInstructions')}</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>{t('taskName')}:</strong> {t('deleteTaskNameDescription')}</li>
                </ul>
                <p>{t('deleteTaskButton')}</p>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('viewingTasks')}</h3>
                <p>{t('viewTasksInstructions')}</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>{t('taskName')}:</strong> {t('viewTaskName')}</li>
                    <li><strong>{t('taskCommand')}:</strong> {t('viewTaskCommand')}</li>
                    <li><strong>{t('taskFrequency')}:</strong> {t('viewTaskFrequency')}</li>
                    <li><strong>{t('taskTimerOptions')}:</strong> {t('viewTaskTimerOptions')}</li>
                </ul>
                <p>{t('viewCreatedTasks')}</p>
            </div>
        </div>
    );
};

export default Documentation;
