import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Car key={product.key} product={product}></Car>)
                }
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Shop;