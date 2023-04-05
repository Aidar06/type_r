import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter} from "react-icons/fa";
import team1 from '../assets/img/team1.png'
import team2 from '../assets/img/team2.png'
import team3 from '../assets/img/team3.png'
import team4 from '../assets/img/team4.png'

const Team = () => {
    return (
        <section id='team'>
            <div className="container">
                <div className="team">
                    <h1>Met Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>
                    <div className="team--group">
                        <div className="team--group__block">
                            <img src={team1} alt=""/>
                            <h2>Sunny Khan</h2>
                            <h4>Executive officer</h4>
                            <div className="team--group__block--icon">
                                <div><FaSkype/></div>
                                <div><FaLinkedinIn/></div>
                                <div><FaTwitter/></div>
                                <div><FaFacebookF/></div>
                            </div>
                        </div>
                        <div className="team--group__block">
                            <img src={team2} alt=""/>
                            <h2>Alina Jesia</h2>
                            <h4>UX/UI DESIGNER</h4>
                            <div className="team--group__block--icon">
                                <div><FaSkype/></div>
                                <div><FaLinkedinIn/></div>
                                <div><FaTwitter/></div>
                                <div><FaFacebookF/></div>
                            </div>
                        </div>
                        <div className="team--group__block">
                            <img src={team3} alt=""/>
                            <h2>Alex Sohag</h2>
                            <h4>BUSINESS DEVELOPMENT</h4>
                            <div className="team--group__block--icon">
                                <div><FaSkype/></div>
                                <div><FaLinkedinIn/></div>
                                <div><FaTwitter/></div>
                                <div><FaFacebookF/></div>
                            </div>
                        </div>
                        <div className="team--group__block">
                            <img src={team4} alt=""/>
                            <h2>Afroza Mou</h2>
                            <h4>Head of marketing</h4>
                            <div className="team--group__block--icon">
                                <div><FaSkype/></div>
                                <div><FaLinkedinIn/></div>
                                <div><FaTwitter/></div>
                                <div><FaFacebookF/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;