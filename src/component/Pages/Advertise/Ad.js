import React from 'react';

const Ad = ({ad}) => {
    const {pImg} = ad;
    return (
        <div>
         
             <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={pImg} alt="Image 1" /> 
	{/* <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?2" alt="Image 2" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?3" alt="Image 3" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?4" alt="Image 4" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://source.unsplash.com/random/241x361/?5" alt="Image 5" /> */}
        </div>
    );
};

export default Ad;