import React from 'react';
import extra from "../assets/img/extraImg.png";

const Extra = () => {
    return (
        <section id='extra'>
            <div className="container">
                <div className="extra">
                    <div className='extra--group'>
                        <h1>We complete every projects extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>
                    </div>
                    <img src={extra} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Extra;