import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const handleDelete = props.handleDelete;

    const handleRandom = props.handleRandom;

    return (
        <div className='cart'>
            <h3>Selected Cars</h3>
            <div className='selected-cars' id='selected-car'>
                {/* <img className='selected-img' src={picture} alt="" /> {name} */}
                {
                    props.cart.map(product => <SingleProduct product={product}></SingleProduct>)
                }
            </div>
            
            <button onClick={handleRandom}><p className='choose-one-btn'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button onClick={handleDelete}><p className='select-again-btn'>SELECT AGAIN</p></button>
        </div>
    );
};

export default Cart;