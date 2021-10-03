import React from 'react';
import './Sports.css';
import AllTeams from '../AllTeams/AllTeams';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Sports = () => {
    return (
        <div className='sport-container'>
            <MenuBar></MenuBar>
            <AllTeams></AllTeams>
            <Footer></Footer>
        </div>
    );
};

export default Sports;