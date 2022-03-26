import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        const newProduct = products.find(product => product.id === selectedProduct.id);
        const newCart = [...cart, newProduct];
        if(newCart.length <= 4) {
            setCart(newCart);
        }
    }

    const handleDelete = () => {
        setCart([]);
    }

    const handleRandom = () => {
        const exist = [...cart];
        if (exist.length > 0) {
            const index = Math.floor(Math.random() * exist.length);
            const random = exist[index];
            setCart([random]);
        }
        
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Car 
                        key={product.key} 
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        ></Car>)
                }
            </div>
            <div className='cart-container'>
                <Cart handleRandom={handleRandom} handleDelete={handleDelete} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;