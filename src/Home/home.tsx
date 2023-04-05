import React from 'react';
import {ImPlay2} from 'react-icons/im'
import homeImg from  '../assets/img/homeImg.png'

const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="home">
                    <div className="home--group">
                        <h1>Virtual Reality Business Solutions</h1>
                        <p>We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                        <div className='home--group__block'>
                            <button>Join Us</button>
                            <div>
                                <ImPlay2 className='home--group__block--icon'/>
                                <span>Watch video</span>
                            </div>
                        </div>
                    </div>
                    <img src={homeImg} alt=""/>
                </div>
            </div>
            <div className='dio1'></div>
            <div className='dio2'/>
            <div className='dio3'/>
        </section>
    );
};

export default Home;