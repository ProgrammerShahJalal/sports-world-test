import React from 'react';
import './About.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import male from '../../images/male.png'
import female from '../../images/female.png'

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="row about">
                <div className="col-md-6">
                    <img className='w-100' src={male} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='w-100' src={female} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;