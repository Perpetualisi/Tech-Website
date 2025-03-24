import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">TECH</div>
            
        
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </div>

        
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
