import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
    const { cartItems } = useCart();
    return (
        <header style={{ padding: "1rem", background: "#55a5ecff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/" style={{ marginRight: "25rem", marginLeft: "2rem", fontWeight: "bold" }} >Home</Link>
                <h3 style={{ marginLeft: "10rem", fontSize: "17px", fontWeight: "bold" }}>ShopSphere</h3>
                <Link to="/cart" style={{ marginLeft: "40rem", fontWeight: "bold" }} >Cart({cartItems.length})</Link>
            </nav>
        </header>
    )
}

export default Header
