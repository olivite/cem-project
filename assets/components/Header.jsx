import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md h-16 fixed top-0 right-0 left-64 flex items-center justify-between px-6 transition-colors">
            <div className="flex items-center">
                <input
                    type="search"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                    <FaBell className="text-gray-600 dark:text-gray-300" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
                </button>
                <div className="flex items-center gap-2">
                    <FaUser className="text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-200">John Doe</span>
                </div>
            </div>
        </header>
    );
};

export default Header;