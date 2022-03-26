import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {name, picture} = props.product;
    return (
        <div className='single-car'>
            <img className='selected-img' src={picture} alt="" /> 
            <p>{name}</p>
        </div>
    );
};

export default SingleProduct;