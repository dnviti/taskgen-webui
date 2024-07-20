// src/components/DeleteTask.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useTasks } from '@/context/TasksContext';
import { toast } from 'react-toastify';
import config from '@/config';
import { useTranslation } from 'react-i18next';

const DeleteTask: React.FC = () => {
    const { t } = useTranslation('common');
    const [name, setName] = useState('');
    const { fetchTasks } = useTasks();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.delete(`${config.apiBaseUrl}/tasks`, {
                data: { name },
            });
            toast.success(t('taskDeletedSuccess'));
            fetchTasks();
            setName('');
        } catch (error) {
            console.error('Error deleting task:', error);
            let errorMessage = t('taskDeletedError');
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
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">{t('deleteTask')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-700 dark:text-gray-300">{t('name')}:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded p-2 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700" />
                </div>
                <button type="submit" className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white py-2 px-4 rounded">{t('deleteTaskButton')}</button>
            </form>
        </div>
    );
};

export default DeleteTask;
