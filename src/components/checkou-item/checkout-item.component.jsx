import React from 'react'
import "./checkout.styles.scss"
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
export default function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItem } = useContext(CartContext);
    const incrementHandler = () => { addItemToCart(cartItem) };
    const decrementHandler = () => { removeItemFromCart(cartItem) };
    const clearHandler = () => { clearItem(cartItem) };
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={decrementHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={incrementHandler}>&#10095;</div>
            </div>

            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearHandler}>&#10005;</span>

        </div>
    )
}
