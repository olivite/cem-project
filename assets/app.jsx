// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import * as PropTypes from "prop-types";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./pages/Profile";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="flex">
                    <Sidebar/>
                    <div className="flex-1 ml-64">
                        <Header/>
                        <main className="mt-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/products" element={<ProductPage/>}/>
                                <Route path="/dashboard" element={<DashboardPage/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/register" element={<RegisterPage/>}/>

                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

