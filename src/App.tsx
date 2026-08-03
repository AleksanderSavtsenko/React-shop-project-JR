import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.tsx'
import ProductsList from './components/Products/products.list.tsx'
import ProductsCartDrawer from './components/Products/ProductsCartDrawer.tsx'
import { useState } from 'react'
import ProductsCartProvider  from './contexts/Products-cart/ProductsCartProvider.tsx'

function App() {
const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean >(false)


function OpenCartDrawer() {
  setCartDrawerOpen(true)
}

function CloseCartDrawer() {
  setCartDrawerOpen(false)
}

  return (
    <ProductsCartProvider>
     <Header OpenCartDrawer = {OpenCartDrawer}/>
     <ProductsList/>
     <ProductsCartDrawer open = {cartDrawerOpen} handleClose = {CloseCartDrawer}/>
    </ProductsCartProvider>
  )
}

export default App
