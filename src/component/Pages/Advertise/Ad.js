import React from 'react';

const Ad = ({ad}) => {
    const {pImg} = ad;
    return (
        <div>
         
             <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={pImg} alt="Image 1" /> 

        </div>
    );
};

export default Ad;