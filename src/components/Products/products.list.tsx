
import classes from './Products.module.css'
import  useGetProductsQuery  from '../../queries/products/useGetProductsQuery.tsx'
import {useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from './ProductCard';
import ProductsCartContext from '../../contexts/Products-cart/ProductsCartContext';





function ProductsList() {
  const { data: products, isLoading: productsLoading } = useGetProductsQuery()

const { productsIdsInCart, addProductToCart, removeProductFromCart } = useContext(ProductsCartContext)










function AddToCart(id: number) {
  addProductToCart(id)
     


    //  const foundProduct = products.find(d => d.id === id) 
    //   if(foundProduct) {
    //     foundProduct.IsInCart = true
    //  }
    //  setProducts([...products])
    
}

function removeFromCart(id: number) {
  removeProductFromCart(id)
// const foundProduct = products.find(d => d.id === id) 
//       if(foundProduct) {
//         foundProduct.IsInCart = false
//      }
//      setProducts([...products])
//
}


    return (
        <div className = {classes.productsListContainer}>
            <h1 className = {classes.title}>Products List</h1>
            <div className = {classes.cardsContainer}>
              {productsLoading ?  <div className = {classes.spinnerContainer}><Spinner animation="border"/></div>
              : products?.map((p , index) => (            
                <ProductCard key = {index} 
                id={p.id} 
                addToCart={AddToCart} 
                removeFromCart={removeFromCart}
                isInCart={productsIdsInCart.includes(p.id)}
                title = {p.title}
                price = {p.price}
                rating = {p.rating.rate}
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