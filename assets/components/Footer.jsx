// assets/pages/HomePage.jsx
import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-blue-400 text-white p-4 mt-auto">
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                        href="https://flowbite.com/"
                        className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;
