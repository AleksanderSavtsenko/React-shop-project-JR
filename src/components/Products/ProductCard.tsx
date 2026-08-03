import { Button, Card } from "react-bootstrap"
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs'
import classes from './Products.module.css'


interface ProductCardProps {
  id: number
    title: string
    description: string
    image: string
    addToCart: (id: number) => void
    isInCart: boolean
    removeFromCart: (id: number) => void

}

function ProductCard({id, title, description, image, addToCart, isInCart, removeFromCart}: ProductCardProps) {

return (
    <div>
               <Card>
      <Card.Img style = {{ padding: '10', height: 300, objectFit: 'contain' }} variant="top" src={image} />
      <Card.Body className = {classes.cardBody}>
        <Card.Title className = {classes.cardTitle}>{title}</Card.Title>
        <Card.Text className = {classes.cardDescription} >
          {description}
        </Card.Text>

        {isInCart 
        ?
        <Button
        onClick={() => removeFromCart(id)}
        className = {classes.cardButton} 
        variant="danger" >
          <BsCartDashFill />Remove from Cart</Button>

        : <Button

        className = {classes.cardButton}
        variant="primary" 
        onClick={() => addToCart(id)}>
          <BsCartPlusFill />Add to Cart</Button>

}
      </Card.Body>
    </Card>
    </div>
)
}
export default ProductCard