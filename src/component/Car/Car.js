import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Car.css'

const Car = ({product, handleAddToCart}) => {
    // console.log(props.product);
    const {name, price, id, picture} = product;
    return (
        <div className='car'>
            <img src={picture} alt="" />
            <div className='car-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Id: {id}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Car;