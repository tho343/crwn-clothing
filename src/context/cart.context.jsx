import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    additemToCart: () => { },
    cartCount: 0,

})

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
    })
    //if found, increment quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    //return new array with modified cartIrems/ new Cart Item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        const newCount = cartItems.reduce((total, product) => total + product.quantity, 0);
        setCartCount(newCount);
    }, [cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}