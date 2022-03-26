import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected Cars</h3>
            <button><p className='choose-one-btn'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button><p className='select-again-btn'>SELECT AGAIN</p></button>
        </div>
    );
};

export default Cart;