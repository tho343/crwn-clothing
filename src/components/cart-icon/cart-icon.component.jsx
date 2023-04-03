import './cart-icon.styles.scss';
import React, { useContext, useState } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';

export default function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>

        </div>
    )
}
