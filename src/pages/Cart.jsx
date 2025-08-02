import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '2rem', display: "flex", justifyContent: "center", }}>
      <h2 style={{marginLeft:"5rem"}} >Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p  style={{marginTop:"5rem", marginRight:"10rem"}} >Your Cart is Empty.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 ,marginTop:"5rem",marginRight:"10rem"}}>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ height: '50px' }}
              />
              <span style={{ marginLeft: '1rem' }}>{item.title}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{ marginLeft: '1rem' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
