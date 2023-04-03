import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    additemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    clearItem: () => { },
    totalCart: 0

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
const removeCartItem = (cartItems, productToRemove) => {
    //find the cartItem toremove in array

    const existingItem = cartItems.find((cartItem) => {
        return cartItem.id === productToRemove.id;
    })

    //check if quantity is equal to 1, if it is remove that item from the cart
    if (existingItem.quantity === 1) {
        return cartItems.filter(product => product.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(product => product.id !== productToClear.id);
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalCart, setTotalCart] = useState(0);
    useEffect(() => {
        const newCount = cartItems.reduce((total, product) => total + product.quantity, 0);
        setCartCount(newCount);
    }, [cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, product) => total + product.quantity * product.price, 0);
        setTotalCart(newTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));

    }
    const clearItem = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItem, totalCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}