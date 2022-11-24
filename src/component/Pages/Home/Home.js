import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('home');
    return (
        <div>
         <Banner></Banner>
         <Categories></Categories>
        </div>
    );
};

export default Home;