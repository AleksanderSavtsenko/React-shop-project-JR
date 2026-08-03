import { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductsCartContext from '../../contexts/Products-cart/ProductsCartContext';
import type { Product } from './Products.types';


interface ProductsCartDrawerProps {
open: boolean;
handleClose: () => void;
}




 function ProductsCartDrawer({open, handleClose}: ProductsCartDrawerProps) {
const [cartProducts, setCartProducts] = useState <Product[]>([])

  const {productsIdsInCart} = useContext(ProductsCartContext)

async function fetchProductsFromCart(ids: number[]) {
  try {

    const promises: Promise<Response>[] = []
    const products: Product[] = []


    ids.forEach((id)=> {
      promises.push(fetch(`https://fakestoreapi.com/products/${id}`))
    })

    
  await Promise.all(promises).then(async(response) => {
for (const response1 of response) {
  const data = await response1.json()
  products.push(data as Product)
}
  })



    setCartProducts(products)
  }
  catch (error) {
    console.error(error)
  }
}
console.log(cartProducts)


useEffect(()=> {
  if(open) {
    void fetchProductsFromCart(productsIdsInCart)

  }
}, [productsIdsInCart, open])


  return (
      <Offcanvas show={open} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartProducts.map((product)=> (
            <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain', cursor: 'pointer' }} />
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
  );
}
export default ProductsCartDrawer;