import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import Proven from '../Proven/Proven';

const Home = () => {
    useTitle('home');
    return (
        <div>
         <Banner></Banner>
         <Categories></Categories>
         <Brands></Brands>
         <Proven></Proven>
        </div>
    );
};

export default Home;