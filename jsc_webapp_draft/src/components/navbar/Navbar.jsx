import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
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

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
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
                        <NavLink to="/"  className={({ isActive }) => `nav-links ${isActive ? "active" : ""}`}
                        onClick={closeMobileMenu}
                        end
                        >
                        Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `nav-links ${isActive ? "active" : ""}`
                        }
                        onClick={closeMobileMenu}
                        >
                        About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/products" 
                        className={({ isActive }) => 
                            `nav-links ${isActive ? "active" : ""}`
                        }
                        onClick={closeMobileMenu}
                        >
                        Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/blog" 
                        className={({ isActive }) => 
                            `nav-links ${isActive ? "active" : ""}`
                        }
                        onClick={closeMobileMenu}
                        >
                        Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            `nav-links ${isActive ? "active" : ""}`
                        }
                        onClick={closeMobileMenu}
                        >
                        Contact
                        </NavLink>
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