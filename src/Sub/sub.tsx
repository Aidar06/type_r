import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";

const Sub = () => {
    return (
        <section id='sub'>
            <div className="container">
                <div className="sub">
                    <h1>Subscribe to get the Latest News</h1>
                    <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                    <div className="sub--input">
                        <input type="text" placeholder='Enter your email addres'/>
                        <button> <FaTelegramPlane/> Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sub;