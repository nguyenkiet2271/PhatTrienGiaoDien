import { useState } from 'react'
import ProductCard from './ProductCard'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Product Store</h1>
      <div className="product-container">
        <ProductCard 
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          name="Wireless Headphones"
          price="99.99"
        />
        <ProductCard 
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
          name="Smart Watch"
          price="199.99"
        />
        <ProductCard 
          image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500"
          name="Designer Sunglasses"
          price="149.99"
        />
      </div>
    </div>
  )
}

export default App
