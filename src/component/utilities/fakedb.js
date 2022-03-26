const addToLocalStorage = (id) => {
    let cartObj;
    const cart = localStorage.getItem('cart');
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    if (Object.keys(cartObj).length <= 3) {
        cartObj[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cartObj))
}

export default addToLocalStorage;