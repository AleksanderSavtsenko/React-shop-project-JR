import ProductsCartContext from './ProductsCartContext.tsx'
import {type ReactNode, type JSX, useState} from 'react'

interface productsCartProviderProps {
    children: ReactNode | JSX.Element;
}

 function ProductsCartProvider({children}: productsCartProviderProps) {
    const [productsIdsInCart, setProductsIdsInCart] = useState<number[]>([])


    function addProductToCart(id: number) {
        const alreadyInCart = productsIdsInCart.some(productsId => productsId === id)
  if(alreadyInCart) {
    return
     }
     setProductsIdsInCart([...productsIdsInCart, id])
    }

    function removeProductFromCart(id: number) {
        setProductsIdsInCart(productsIdsInCart.filter(productId => productId !== id))
    }

    return (
        <ProductsCartContext.Provider value = {{
            productsIdsInCart, 
            setProductsIdsInCart, 
            addProductToCart, 
            removeProductFromCart
        }}  
        >
            {children}
        </ProductsCartContext.Provider>
    )
}

export default ProductsCartProvider