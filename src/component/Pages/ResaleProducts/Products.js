import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Product from './Product';


const Products = () => {
    const {user} = useContext(AuthContext);
    const {products} = useLoaderData([]);
    console.log(products)
    return (
        
     <div className='flex gap-5 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-5 px-5 mx-5'>
      
<div className="w-full max-w-sm  rounded-lg  dark:bg-gray-800 dark:border-gray-700  bg-base-100 shadow-xl">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={products[0].pImg} alt="product image" />
    </a>
    <div className="px-5 pb-5 mb-4">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">{products[0].pName}</h5>
        </a>
        <div  >
            <div>
            <span className="text-xl font-semibold text-blue-500 dark:text-white">Resale Price:{products[0].resalePrice}</span>
            <br />
            <p className="  text-gray-900 dark:text-white">Original Price: {products[0].OriginalPrice}</p>
            <p className="  text-gray-900 dark:text-white">Location: {products[0].location}</p>
            <p className="  text-gray-900 dark:text-white">Years of Use: {products[0].Use}</p>
            <p>Seller:{user.displayName}</p>
            </div>
        </div>
        <div className='mt-5'>
        <a href="#" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</a>
        </div>
    </div>
</div>

     
     </div>

    );
};

export default Products;