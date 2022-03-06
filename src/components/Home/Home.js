import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import MyServices from './MyServices/MyServices';
import Portfolio from './Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;