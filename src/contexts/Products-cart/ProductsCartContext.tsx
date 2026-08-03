import { createContext, type Dispatch } from "react";

export interface ProductsCartContextData {
    productsIdsInCart: number[];
    setProductsIdsInCart: Dispatch<React.SetStateAction<number[]>>;
    addProductToCart: (id: number) => void;
    removeProductFromCart: (id: number) => void;
}

 const ProductsCartContext = createContext <ProductsCartContextData> ({
    productsIdsInCart: [],
    setProductsIdsInCart: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {}
}
 )

 export default ProductsCartContext

