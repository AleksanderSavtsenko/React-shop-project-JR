import axios from 'axios'
import type { GetProductsResponse } from './products.api.types'
import type { Product } from '../../components/Products/Products.types'

async function getProducts(): Promise<GetProductsResponse> {
   
    const response = await axios.get<GetProductsResponse>('https://fakestoreapi.com/products')
    return response.data
}

async function getProductsById(id: string): Promise<Product> {
   
    const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
    return response.data
}

const productsApi = { getProducts, getProductsById}

export default productsApi