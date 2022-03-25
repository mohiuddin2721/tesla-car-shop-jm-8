import React from 'react';
import './Car.css'

const Car = (props) => {
    console.log(props.product);
    return (
        <div>
            <img src={props.product.picture} alt="" />
            <h2>Name: {}</h2>
            <h3>Price: ${}</h3>
            <p>Id: {}</p>
        </div>
    );
};

export default Car;