import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            console.log(res.data)
            setProducts(res.data)
        } )
        .catch((err) => console.log(err))
    },[]);

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"1rem", padding:"1rem"}} >

        {/* {products.length === 0 && <P>No Products Found</P>} */}

        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
        
    </div>
  )
}

export default ProductList
