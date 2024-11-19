import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const menuItems = [
        { path: '/', icon: <FaHome />, text: 'Dashboard' },
        { path: '/users', icon: <FaUsers />, text: 'Users' },
        { path: '/analytics', icon: <FaChartBar />, text: 'Analytics' },
        { path: '/settings', icon: <FaCog />, text: 'Settings' },
    ];

    return (
        <div className="bg-gray-800 dark:bg-gray-900 text-white h-screen w-64 fixed left-0 top-0 p-4 transition-colors">
            <div className="text-2xl font-bold mb-8 p-4">Admin Panel</div>
            <nav>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-4 p-3 rounded-lg transition-colors ${
                                isActive ? 'bg-blue-600 dark:bg-blue-700' : 'hover:bg-gray-700 dark:hover:bg-gray-800'
                            }`
                        }
                    >
                        {item.icon}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
                <button className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 w-full mt-auto transition-colors">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;