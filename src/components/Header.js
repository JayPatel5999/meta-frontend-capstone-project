import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../source/restauranfood.jpg';


const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* Banner Text */}
                <div className='hero-banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran retaurant, focused on trditional recipies served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                {/* Banner Image */}
                <div className='hero-banner-img'>
                    <img src={heroImg} alt='Hero' />
                </div>
            </section>
        </header>
    );
}

export default Header;