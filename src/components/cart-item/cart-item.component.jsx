import "./cart-item.styles.scss";


import React from 'react'


export default function CartItem({ product }) {
    const { name, imageUrl, price, quantity } = product
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>

        </div>
    )
}
