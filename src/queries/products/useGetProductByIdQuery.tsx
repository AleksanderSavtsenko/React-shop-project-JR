import { useQuery } from '@tanstack/react-query'
import productsApi from '../../apis/products/products.api.ts'

export default function useGetProductByIdQuery(id: string | undefined) {
    return useQuery({  
                queryKey: ['products', id],
                queryFn: () => {
                  if(id) {
                    return productsApi.getProductsById(id.toString())
                  }
                },
                enabled: Boolean(id)

    })
}
