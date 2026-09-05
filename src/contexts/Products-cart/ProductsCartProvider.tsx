import ProductsCartContext from './ProductsCartContext.tsx'
import {type ReactNode, type JSX, useState} from 'react'
import StorageService from '../../services/storageService.ts';
interface productsCartProviderProps {
    children: ReactNode | JSX.Element;
}

const storageService = new StorageService()

 function ProductsCartProvider({children}: productsCartProviderProps) {

    const initialValue = JSON.parse(storageService.get('productsIdsInCart') || '[]') as number[]
    const [productsIdsInCart, setProductsIdsInCart] = useState<number[]>(initialValue)


    function addProductToCart(id: number) {
        const alreadyInCart = productsIdsInCart.some(productsId => productsId === id)
  if(alreadyInCart) {
    return
     }

     const newProductsIdsInCart = [...productsIdsInCart, id]
     storageService.set('productsIdsInCart', JSON.stringify(newProductsIdsInCart))
     setProductsIdsInCart(newProductsIdsInCart)
    }

    
    function removeProductFromCart(id: number) {

        const filtredProductsIdsInCart = productsIdsInCart.filter(productsId => productsId !== id)
        storageService.set('productsIdsInCart', JSON.stringify(filtredProductsIdsInCart))
        setProductsIdsInCart(filtredProductsIdsInCart)
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