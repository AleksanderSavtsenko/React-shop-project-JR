import { useState, type JSX } from 'react';
import Header from '../components/Header.tsx';
import ProductsCartDrawer from '../components/Products/ProductsCartDrawer.tsx';
import classes from './mainLayout.module.css'

function MainLayout({children}: {children: JSX.Element}) {

    const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean >(false)


function OpenCartDrawer() {
  setCartDrawerOpen(true)
}

function CloseCartDrawer() {
  setCartDrawerOpen(false)
}
  return (
    <>
<Header OpenCartDrawer = {OpenCartDrawer}/>
<div className = {classes.main}>
    {children}
</div>

 <ProductsCartDrawer open = {cartDrawerOpen} handleClose = {CloseCartDrawer}/>
    </>
  );
}   
export default MainLayout;