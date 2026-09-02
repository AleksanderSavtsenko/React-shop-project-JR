import { Button, Card } from "react-bootstrap"
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs'
import classes from './Products.module.css'
import { Rating } from "@smastrom/react-rating"
import { useNavigate } from "react-router"



interface ProductCardProps {
  id: number
    title: string
    description: string
    image: string
    rating?: number
    price: number
    addToCart: (id: number) => void
    isInCart: boolean
    removeFromCart: (id: number) => void

}

function ProductCard({id, title, description, image, addToCart, isInCart, removeFromCart, price, rating}: ProductCardProps) {

const navigate= useNavigate()
  function openDetailsPage() {
    navigate(`/product-details/${id}`)
}
return (

               <Card style = {{cursor: 'pointer'}}onClick={openDetailsPage}>
      <Card.Img style = {{ padding: '10', height: 300, objectFit: 'contain' }} variant="top" src={image} />
      <Card.Body className = {classes.cardBody}>
        <Card.Title className = {classes.cardTitle}>{title}</Card.Title>
        <Card.Text className = {classes.cardDescription} >
          {description}


        </Card.Text>    
  <div>
    <div className = {classes.cardPriceAndRating}>
         <span className={classes.cardPrice}> ${price}
        </span>
        <span className={classes.cardPriceFake}>
          $ {price * 1.5}
          </span>

       
    </div>
       <Rating
      style={{ maxWidth: 120 }}
      value={rating ||4.5}
      readOnly
      />
       
        {isInCart 
        ?
        <Button
        onClick={(event) => {
          event.stopPropagation()
          removeFromCart(id)
        }}
        className = {classes.cardButton} 
        variant="danger" >
          <BsCartDashFill />Remove from Cart</Button>

        : <Button

        className = {classes.cardButton}
        variant="primary" 
        onClick={(event) => {event.stopPropagation()
addToCart(id)
}}>
          <BsCartPlusFill />Add to Cart</Button>
}
  </div>
    
      </Card.Body>
    </Card>
  
)
}
export default ProductCard