import React, { useState } from 'react';
import Logo from '../source/Logo .svg'
import HamburgerMenu from '../source/🦆 icon _hamburger menu.svg';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'><img src={Logo} alt='Little Lemon Logo'></img></a>

            {/* Mobile Navbar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={HamburgerMenu} alt='Hamburger Menu icon '></img>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
                <li><a href='/'>Home </a></li>
                <li><a href='/'>About </a></li>
                <li><a href='/'>Menu </a></li>
                <li><a href='/'>Reservations </a></li>
                <li><a href='/'>Order Online </a></li>
                <li><a href='/'>Login </a></li>
            </ul>
        </nav>
    );
}

export default Nav;