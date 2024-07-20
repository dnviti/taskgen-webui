// src/components/TaskList.tsx
"use client";

import React from 'react';
import { useTasks } from '@/context/TasksContext';
import { useTranslation } from 'react-i18next';

const TaskList: React.FC = () => {
    const { t } = useTranslation('common');
    const { tasks } = useTasks();

    return (
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg h-full">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">{t('taskList')}</h2>
            <div className="overflow-x-auto h-full">
                <table className="min-w-full bg-white dark:bg-gray-800 h-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-gray-300">{t('name')}</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-gray-300">{t('command')}</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-gray-300">{t('frequency')}</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-gray-300">{t('timerOptions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="py-2 px-4 text-center text-gray-800 dark:text-gray-300">
                                    {t('noTasks')}
                                </td>
                            </tr>
                        ) : (
                            tasks.map((task) => (
                                <tr key={task.name}>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">{task.name}</td>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">{task.command}</td>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">{task.frequency}</td>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">{task.timer_options}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskList;
