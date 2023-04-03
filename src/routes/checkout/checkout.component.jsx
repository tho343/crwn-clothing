import React from 'react'
import "./checkout.styles.scss"
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import CheckoutItem from '../../components/checkou-item/checkout-item.component'

export default function Checkout() {
    const { cartItems, totalCart } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((product) => {

                    return (
                        <CheckoutItem key={product.id} cartItem={product}>

                        </CheckoutItem>
                    )
                }

                )
            }
            <span className="total">Total: ${totalCart}</span>
        </div>
    )
}
