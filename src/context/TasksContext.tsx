// src/context/TasksContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '@/config';

interface Task {
    name: string;
    command: string;
    frequency: string;
    timer_options: string;
}

interface TasksContextType {
    tasks: Task[];
    fetchTasks: () => void;
    addTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get<Task[]>(`${config.apiBaseUrl}/tasks`);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TasksContext.Provider value={{ tasks, fetchTasks, addTask }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
};
