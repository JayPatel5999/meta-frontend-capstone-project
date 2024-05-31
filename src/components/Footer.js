import React from 'react';
import logo from '../source/Logo .svg'

function Footer() {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Footer Logo'></img>
                    <p>Little Lemon is a fictional restaurant created for the purpose of this tutorial. All rights reserved.</p>
                </div>    
                <div>
                        <h3>Doormat Navigation</h3>
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
                <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Address: <br/> 128 Wellington Street, Branford, Canada</li>
                            <li>Phone number: <br/> +1 (123) 456-7890</li>
                            <li>Email address: <br/> littlelemon@example.com</li>
                        </ul>
                </div>
                <div>
                        <h3>Social Media Links</h3>
                        <ul>
                            <li><a href='https://www.twitter.com' target='_blank' rel="noreferrer">Little Lemon on Twitter</a></li>
                            <li><a href='https://www.facebook.com' target='_blank' rel="noreferrer">Little Lemon on Facebook</a></li>
                            <li><a href='https://www.instagram.com' target='_blank' rel="noreferrer">Little Lemon on Instagram</a></li>
                        </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;