import React from 'react';
import DashboardStats from '../components/DashboardStats';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
    const { darkMode } = useTheme();
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 700 },
        { name: 'Jun', value: 900 },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 dark:text-white transition-colors">Dashboard Overview</h1>
            <DashboardStats />

            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Revenue Overview</h2>
                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                            <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#4b5563'} />
                            <YAxis stroke={darkMode ? '#9ca3af' : '#4b5563'} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    color: darkMode ? '#ffffff' : '#000000'
                                }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#3B82F6" fill={darkMode ? '#1d4ed8' : '#93C5FD'} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;