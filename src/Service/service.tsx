import React, {useState} from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import icon1 from '../assets/img/icon1.png'
import icon2 from '../assets/img/icon2.png'
import icon3 from '../assets/img/icon3.png'
import icon4 from '../assets/img/icon4.png'
import icon5 from '../assets/img/icon5.png'
import icon6 from '../assets/img/icon6.png'

const Service = () => {
    const [click,setClick] = useState(false)
    return (
        <section id='service'>
            <div className="container">
                <div className="service">
                    <h1>Our Service </h1>
                    <p className="service--text">We turn information into actionable insights We work to understand your issues
                        and are driven to ask better questions in the pursuit of making work.</p>
                    <div className='service--group'>
                        <div className='service--group__block'>
                            <div style={{
                                background: 'linear-gradient(180deg, #8A7FD9 0%, #402F8F 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon1} alt=""/>
                            </div>
                            <h2>Order Management</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)}>Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                        <div className='service--group__block'>
                            <div style={{
                                background: 'linear-gradient(180deg, #D97F95 0%, #923250 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon2} alt=""/>
                            </div>
                            <h2>Social Assistant</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)}>Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                        <div className='service--group__block' >
                            <div style={{
                                background: 'linear-gradient(180deg, #84D8ED 0%, #4292BB 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon3} alt=""/>
                            </div>
                            <h2>Crypto Platform</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)} >Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                        <div style={{display: click ? '' : 'none'}} className='service--group__block'>
                            <div style={{
                                background: 'linear-gradient(180deg, #92EFC3 0%, #2F8F5B 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon4} alt=""/>
                            </div>
                            <h2>Smart Trading Modules</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)}>Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                        <div style={{display: click ? '' : 'none'}} className='service--group__block'>
                            <div style={{
                                background: 'linear-gradient(180deg, #BC7FD9 0%, #923283 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon5} alt=""/>
                            </div>
                            <h2>Analyzer of the News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)}>Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                        <div style={{display: click ? '' : 'none'}} className='service--group__block'>
                            <div style={{
                                background: 'linear-gradient(180deg, #8684ED 0%, #4247BB 100%)'
                            }} className='service--group__block--img'>
                                <img src={icon6} alt=""/>
                            </div>
                            <h2>Module of Price Notification</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <div className='service--group__block--learn'>
                                <span onClick={()=> setClick(!click)}>Learn more</span>
                                <BsArrowRightShort/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;