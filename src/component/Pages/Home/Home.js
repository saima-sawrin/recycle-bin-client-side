import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('home');
    return (
        <div>
         <Banner></Banner>
        </div>
    );
};

export default Home;