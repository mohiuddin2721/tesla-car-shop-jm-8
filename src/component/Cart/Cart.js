import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const {picture, name} = props.cart;

    const removeItems = () => {
        document.getElementById('selected-car').innerHTML = '';
    }

    return (
        <div className='cart'>
            <h3>Selected Cars</h3>
            <ul className='selected-cars' id='selected-car'>
                <img className='selected-img' src={picture} alt="" /> {name}
            </ul>
            
            <button><p className='choose-one-btn'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button onClick={removeItems}><p className='select-again-btn'>SELECT AGAIN</p></button>
        </div>
    );
};

export default Cart;