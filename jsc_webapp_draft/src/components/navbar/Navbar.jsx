import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
        setIsDarkTheme(savedTheme === 'dark');
        document.body.className = savedTheme + '-theme';
        }
    }, []);
    
    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.body.className = newTheme ? 'dark-theme' : 'light-theme';
    };

    return (
        <nav className={`navbar ${isDarkTheme ? "dark" : "light"}`}>
            <div className="navbar-container">
                {/* TODO: import Logo */}
                <a href="/" className="navbar-logo">
                    JSC <span className="logo-accent">Ministries</span>
                </a>
                
                {/* Mobile Hamburger Icon */}
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    ☰
                </div>

                {/* Navigation Links */}
                <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                    <li className="nav-item">
                    <a href="/" className="nav-links">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#about" className="nav-links">
                        About
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#products" className="nav-links">
                        Products
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#blog" className="nav-links">
                        Blog
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#contact" className="nav-links">
                        Contact
                    </a>
                    </li>
                </ul>

                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDarkTheme ? "☀︎" : "⏾"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;