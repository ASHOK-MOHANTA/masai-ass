import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext();

const initialState = {
    cartItems: []
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD-TO-CART":
            const exists = state.cartItems.find(item => item.id === action.payload.id);
            if (exists) return state;
            return {
                ...state, cartItems: [...state.cartItems, action.payload]
            };
        case " REMOVE-FROM-CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: "ADD-TO-CART", payload: product });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE-FROM-CART", payload: id });
    };
    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
