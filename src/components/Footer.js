import React from 'react';

function Footer() {
    return (
        <footer>
            <img src='#' alt='Footer Logo'></img>
            <div className='footer-nav-col-1'>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li>
                        <li><a href='/'>Home </a></li>
                        <li><a href='/'>About </a></li>
                        <li><a href='/'>Menu </a></li>
                        <li><a href='/'>Reservations </a></li>
                        <li><a href='/'>Order Online </a></li>
                        <li><a href='/'>Login </a></li>
                    </li>
                </ul>
            </div>
            <div className='footer-nav-col-2'>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
            <div className='footer-nav-col-3'>
                <h2>Socia Media Links</h2>
                <ul className='social-icons'>
                    <li><a href='https://www.twitter.com' target='_blank' rel="noreferrer">Little Lemon on Twitter</a></li>
                    <li><a href='https://www.facebook.com' target='_blank' rel="noreferrer">Little Lemon on Facebook</a></li>
                    <li><a href='https://www.instagram.com' target='_blank' rel="noreferrer">Little Lemon on Instagram</a></li>
                </ul>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;