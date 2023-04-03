import "./cart-dropdown.styles.scss"
import React from 'react'
import Button from "../button/button.component"

export default function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                <Button buttonType=""> checkout</Button>
            </div>
        </div>
    )
}