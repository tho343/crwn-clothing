import "./cart-dropdown.styles.scss"
import React from 'react'
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"

export default function CartDropdown() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate("/checkout");
    }
    return (
        <div className="cart-dropdown-container">
            {cartItems.map(product => {
                return <CartItem className="cart-items" product={product} key={product.id}>

                </CartItem>
            })}
            <Button onClick={handleCheckout}> checkout</Button>
        </div>
    )
}
