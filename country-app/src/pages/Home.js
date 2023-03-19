import React from 'react';
import Logo from '../components/Logo';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';


const Home = () => {
    return (

        <div>
             <Logo/>
            <Navigation />
            <Countries/>
        </div>
    );
};

export default Home;