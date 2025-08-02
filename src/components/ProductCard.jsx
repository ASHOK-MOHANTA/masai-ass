import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div style={{border:"1px solid black",padding:"1rem",backgroundColor:"lightblue"}} >
        <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} style={{height:"150px",objectFit:"contain"}} />
        <h3>{product.title.slice(0,50)}....</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
