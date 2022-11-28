import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Advertise from '../Advertise/Advertise';
import Category from './Category';

const Categories = () => {
    const{loading} = useContext(AuthContext)

    const[categories, setCategories] = useState([])
        // console.log(categories)

    useEffect(()=>{
        fetch('https://recycle-bin-server-side-saima-sawrin.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },
        [])
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }
    return (
  <div className='text-center'>
          <div className='text-align-center   mt-4'>
          <h3 className='text-4xl font-bold text-center'> Our Services</h3>
   
     <div className="container flex flex-col justify-center p-4 mx-auto">
     <div className='categoryCard grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2'>
        {
        categories.map(category => <Category key={category._id} category={category}></Category>)
         }
     </div>
   
     </div>

        </div>
  </div>
    );
};

export default Categories;