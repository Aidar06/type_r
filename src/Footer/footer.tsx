import React from 'react';
import logo from '../assets/img/Logo (2).svg'
import {FiMapPin} from "react-icons/fi";
import {MdOutlineEmail} from "react-icons/md";
import {BsTelephoneOutbound} from "react-icons/bs";
import {GrFacebookOption, GrInstagram, GrTwitter} from "react-icons/gr";
import {FaPinterestP} from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <img src={logo} alt=""/>
                        <div className="footer--logo__links">
                            <FiMapPin/>
                            <a href='#'>Dhaka, Bangladesh</a>
                        </div>
                        <div className="footer--logo__links">
                            <BsTelephoneOutbound/>
                            <a href='#'>0943833399</a>
                        </div>
                        <div className="footer--logo__links">
                            <MdOutlineEmail/>
                            <a href='#'>support@zone.com</a>
                        </div>
                        <div className="footer--logo__icons">
                            <div><GrFacebookOption/></div>
                            <div><GrTwitter/></div>
                            <div><GrInstagram/></div>
                            <div><FaPinterestP/></div>
                        </div>
                    </div>
                    <div className='footer--block'>
                        <h2>Service</h2>
                        <a href="#">Order Management</a>
                        <a href="#">Social Assistant</a>
                        <a href="#">Crypto Platform</a>
                        <a href="#">Analyzer of the News</a>
                    </div>
                    <div className='footer--block'>
                        <h2>Company</h2>
                        <a href="#">About Us</a>
                        <a href="#">News</a>
                        <a href="#">Our trusted partner</a>
                        <a href="#"> New users FAQ</a>
                    </div>
                    <div className='footer--block'>
                        <h2>Supports</h2>
                        <a href="#"> Help center</a>
                        <a href="#">Feedbcak</a>
                        <a href="#">Contact us</a>
                        <a href="#"> Terms conditins</a>
                    </div>
                    <div className='footer--block'>
                        <h2>Resources</h2>
                        <a href="#">Download app</a>
                        <a href="#">Blog</a>
                        <a href="#">What’s new</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
            <div className='footerEnd'>
                <div className="container">
                    <div className='footerGroup'>
                        <p>© 2021 Zone. - All rights reserved.</p>
                        <div>
                            <a href="#">Privacy</a>
                            <a href="#">Security</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;