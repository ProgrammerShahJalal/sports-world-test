import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import goal from '../../images/goal.svg';
import basketball from '../../images/basketball.svg';

const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="row about">
                <div className="col-md-6">
                    <img className='w-100' src={goal} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='w-100' src={basketball} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;