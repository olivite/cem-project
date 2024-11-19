import React from 'react';
import { FaUsers, FaShoppingCart, FaChartLine, FaDollarSign } from 'react-icons/fa';

const StatsCard = ({ icon, title, value, trend }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
                <h3 className="text-2xl font-bold mt-2 dark:text-white">{value}</h3>
                <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {trend >= 0 ? '+' : ''}{trend}% from last month
                </p>
            </div>
            <div className="text-blue-500 dark:text-blue-400 text-3xl">{icon}</div>
        </div>
    </div>
);

const DashboardStats = () => {
    const stats = [
        { icon: <FaUsers />, title: 'Total Users', value: '2,453', trend: 12.5 },
        { icon: <FaShoppingCart />, title: 'Total Orders', value: '854', trend: 8.2 },
        { icon: <FaChartLine />, title: 'Growth', value: '67%', trend: 15.3 },
        { icon: <FaDollarSign />, title: 'Revenue', value: '$21,456', trend: -2.4 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default DashboardStats;