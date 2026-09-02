import {useParams} from "react-router"
import type { Product } from "../../components/Products/Products.types"
import { useEffect } from "react"

function ProductDetailsPage() {

    const { id } = useParams()


async function fetchProduct(id: string)  {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json() as Product
        console.log(data)
        
    }

    catch (error) {
        console.error(error)
    }
}


useEffect(()=> {
   if(id) {
     void fetchProduct(id)
   }
}, [id])






  return (
    <div>
      <h1>Product Details Page</h1>
    </div>
  )
}

export default ProductDetailsPage