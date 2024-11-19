import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
            ) : (
                <FaMoon className="text-gray-600 text-xl" />
            )}
        </button>
    );
};

export default ThemeToggle;