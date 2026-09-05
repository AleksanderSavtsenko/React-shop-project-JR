import {useParams} from "react-router"
import type { Product } from "../../components/Products/Products.types"
import { useContext, useEffect, useState } from "react"
import { Button, Card, Placeholder } from "react-bootstrap"
import MainLayout from "../../layouts/MainLayout"
import classes from './ProductDetailsPage.module.css'
import { Rating } from "@smastrom/react-rating"
import ProductsCartContext from "../../contexts/Products-cart/ProductsCartContext"
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs"

function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState<boolean>(true)
  const{productsIdsInCart, addProductToCart, removeProductFromCart} = useContext(ProductsCartContext)
    const { id } = useParams()


async function fetchProduct(id: string)  {
    try {
      setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json() as Product
       setProduct(data)
        
    }

    catch (error) {
        console.error(error)
    }
    finally {
      setLoading(false)
    }
}

const isInCart = product
  ? productsIdsInCart.includes(product.id)
  : false

function removeFromCart(id: number | undefined) {
  if(id) {
    removeProductFromCart(id)
  }
}

function addToCart(id: number | undefined) {
  if(id) {
    addProductToCart(id)
    
  }
}


useEffect(()=> {
   if(id) {
     void fetchProduct(id)
   }
}, [id])






  return (
   <MainLayout>
     <>
     {!loading && !product && (
      <h3 className = {classes.productNotFound}>Product not found</h3>
     )}
     {!loading && product && (
      <Card className = {classes.card}>
      
       <Card.Img className = {classes.image} variant="top" src={product?.image} />  
        <Card.Body className = {classes.cardBody}>
          <Card.Title>
            {product?.title}
            </Card.Title>


          <Card.Text className = {classes.description}>
            {product?.description}
            </Card.Text>  
           <div className = {classes.priceAndRatingContainer}>

            <div className={classes.priceDivider}></div>
             <Card.Text className = {classes.cardFooter}>
              <span className = {classes.price}>${product?.price}</span>   
              <span className = {classes.fakePrice}>${product?.price ? (product.price * 1.5).toFixed(2) : ''}</span>
              </Card.Text>
             <Card.Text className = {classes.ratingContainer}>  
               <Rating
                    style={{ maxWidth: 120 }}
                    value={product?.rating.rate || 0}
                    readOnly/>

                    <span className = {classes.ratingCount}>({product?.rating?.count})</span>
             </Card.Text>
           </div>
               {isInCart 
        ?
        <Button size = 'lg'
        onClick={(event) => {
          event.stopPropagation()
          removeFromCart(product?.id)
        }}
        className = {classes.cardButton} 
        variant="danger" >
          <BsCartDashFill />Remove from Cart</Button>

        : <Button

        className = {classes.cardButton}
        variant="primary" 
        onClick={(event) => {event.stopPropagation()
      addToCart(product?.id)
   }}>
          <BsCartPlusFill />Add to Cart</Button>
  }
        </Card.Body>
      </Card>
     )}


      {loading && (
        <Card className = {classes.card}>
       <Card.Body>
        <Placeholder animation = 'glow' className = {classes.cardSkeleton}>
        <Placeholder xs = {12} style = {{height: 400}}/>
        <Placeholder xs = {8} style = {{height: 50}}/>
        <Placeholder xs = {12} style = {{height: 100}}/>
        <Placeholder xs = {7} style = {{height: 70}}/>
        <Placeholder.Button xs = {3} style = {{height: 50}}/>
        </Placeholder>  
       </Card.Body>
       
      </Card>
      )}
    </>
   </MainLayout>
  )
}

export default ProductDetailsPage