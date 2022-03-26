import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Car.css'

const Car = (props) => {
    console.log(props.product);
    const {name, price, id, picture} = props.product;
    return (
        <div className='car'>
            <img src={picture} alt="" />
            <div className='car-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Id: {id}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            
        </div>
    );
};

export default Car;