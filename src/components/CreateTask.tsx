// src/components/CreateTask.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useTasks } from '@/context/TasksContext';
import { toast } from 'react-toastify';
import config from '@/config';
import { useTranslation } from 'react-i18next';

const CreateTask: React.FC = () => {
    const { t } = useTranslation('common');
    const [name, setName] = useState('');
    const [command, setCommand] = useState('');
    const [frequency, setFrequency] = useState('');
    const [timerOptions, setTimerOptions] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`${config.apiBaseUrl}/tasks`, {
                name,
                command,
                frequency,
                timer_options: timerOptions,
            });
            toast.success(t('taskCreatedSuccess'));
            addTask({ name, command, frequency, timer_options: timerOptions });
            setName('');
            setCommand('');
            setFrequency('');
            setTimerOptions('');
        } catch (error) {
            console.error('Error creating task:', error);
            let errorMessage = t('taskCreatedError');
            if (axios.isAxiosError(error) && error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            toast.error(errorMessage);
        }
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">{t('createTask')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300">{t('name')}:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded p-2 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300">{t('command')}:</label>
                    <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} required className="border rounded p-2 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300">{t('frequency')}:</label>
                    <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} required className="border rounded p-2 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700" />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300">{t('timerOptions')}:</label>
                    <input type="text" value={timerOptions} onChange={(e) => setTimerOptions(e.target.value)} className="border rounded p-2 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700" />
                </div>
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white py-2 px-4 rounded">{t('createTaskButton')}</button>
            </form>
        </div>
    );
};

export default CreateTask;
