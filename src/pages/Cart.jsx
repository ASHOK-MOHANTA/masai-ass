import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {

    const {cartItems,removeFromCart} = useCart();

  return (
    <div style={{padding:"2rem"}}>
        <h2>Shooping Cart</h2>
        {cartItems.length === 0 && <p>Your Cart is Empty.</p> }
       <ul>
        {cartItems.map(item) =>(
            <li></li>
        )}
       </ul>
    </div>
  )
}

export default Cart
