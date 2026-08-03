
import classes from './Products.module.css'

import { useState, useEffect, useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from './ProductCard';
import ProductsCartContext from '../../contexts/Products-cart/ProductsCartContext';
import type { Product } from './Products.types';





function ProductsList() {
const [products, setProducts] = useState<Product[]>([])
const [productsLoading, setProductsLoading] = useState<boolean>(false)

const { productsIdsInCart, addProductToCart, removeProductFromCart } = useContext(ProductsCartContext)

console.log(productsIdsInCart)
console.log(products)




async function fetchProducts() {
  setProductsLoading(true)
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json() as Product[]
    setProducts(data.map(d => ({ ...d, IsInCart: false })))
  }
  catch (error) {
    console.error('Error fetching products:', error)
  }
  finally {
    setProductsLoading(false)
  }
}

useEffect(() => {
  void fetchProducts()
}, [])




function AddToCart(id: number) {
  addProductToCart(id)
     


     const foundProduct = products.find(d => d.id === id) 
      if(foundProduct) {
        foundProduct.IsInCart = true
     }
     setProducts([...products])
    
}

function removeFromCart(id: number) {
  removeProductFromCart(id)
const foundProduct = products.find(d => d.id === id) 
      if(foundProduct) {
        foundProduct.IsInCart = false
     }
     setProducts([...products])
}



    return (
        <div className = {classes.productsListContainer}>
            <h1 className = {classes.title}>Products List</h1>
            <div className = {classes.cardsContainer}>
              {productsLoading ?  <div className = {classes.spinnerContainer}><Spinner animation="border"/></div>
              : products.map((p , index) => (            
                <ProductCard key = {index} 
                id={p.id} 
                addToCart={AddToCart} 
                removeFromCart={removeFromCart}
                isInCart={p.IsInCart}
                title = {p.title}
                description = {p.description}
                image = {p.image}
                />
    ))
      
    }
              
              

 
    </div>
        </div>
    )   
}

export default ProductsList