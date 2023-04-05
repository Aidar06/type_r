import React from 'react';
import logo from '../assets/img/Logo (2).svg';

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="navbar">
                    <img src={logo} alt=""/>
                    <div className='navbar--nav'>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Service</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;