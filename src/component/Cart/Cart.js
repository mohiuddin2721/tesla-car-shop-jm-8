import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {picture, name} = props.cart;
    return (
        <div className='cart'>
            <h3>Selected Cars</h3>
            <p><img className='selected-img' src={picture} alt="" /> {name}</p>
            <button><p className='choose-one-btn'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button><p className='select-again-btn'>SELECT AGAIN</p></button>
        </div>
    );
};

export default Cart;