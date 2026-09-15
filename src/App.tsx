import '@smastrom/react-rating/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



import ProductsCartProvider  from './contexts/Products-cart/ProductsCartProvider.tsx'
import router from './router.tsx'
import { RouterProvider } from 'react-router/dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <ProductsCartProvider>
    
     <RouterProvider router={router} />

    </ProductsCartProvider>
    </QueryClientProvider>
  )
}

export default App
