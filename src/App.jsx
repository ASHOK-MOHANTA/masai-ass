import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
