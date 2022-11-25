import React from 'react';

const Product = ({product}) => {
    const{_id, products} = product;
    console.log(product)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={products.pImg} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{products.pName}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default Product;