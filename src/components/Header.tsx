import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { BsCartCheckFill } from 'react-icons/bs'
import { useContext } from 'react'
import ProductsCartContext from '../contexts/Products-cart/ProductsCartContext'
import classes from './Header.module.css'
import { useNavigate } from 'react-router'



interface HeaderProps {
  OpenCartDrawer: () => void
}



function Header({OpenCartDrawer}:HeaderProps) {
  const navigate = useNavigate()
function openHomePage() {
  navigate('/')
}

  const { productsIdsInCart } = useContext(ProductsCartContext)
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={openHomePage} style = {{cursor: 'pointer'}}>React.Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
             <Button className = {classes.cartButton} onClick = {OpenCartDrawer} variant="outline-primary"><BsCartCheckFill size = '20' />
             <Badge className = {classes.badge} pill bg="success">
        {productsIdsInCart.length}
      </Badge>
             </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header