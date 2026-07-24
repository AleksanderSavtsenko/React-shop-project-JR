import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsCartCheckFill } from 'react-icons/bs'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React.Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
             <BsCartCheckFill />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header