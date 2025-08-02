import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <p>Loading.....</p>

    return (
        <div style={{ display: "flex", justifyContent: "center",marginTop:"1rem" }}>
            <div style={{ border: "1px solid #ccc", padding: "1rem", backgroundColor: "lightblue", justifyContent: "center", alignItems: "center", width: "700px" }} >
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} style={{ height: "200px",display:'flex',justifyContent:"center", alignItems: "center" }} />
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button onClick={() => addToCart(product)} style={{ fontSize: "20px", marginLeft: "10rem", backgroundColor: "#0b64b3ff", border: "2px solid black"}} >Add To Cart</button>
            </div>
        </div>

    );
}

export default ProductDetails
