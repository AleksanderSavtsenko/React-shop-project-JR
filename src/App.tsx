import '@smastrom/react-rating/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



import ProductsCartProvider  from './contexts/Products-cart/ProductsCartProvider.tsx'
import router from './router.tsx'
import { RouterProvider } from 'react-router/dom'

function App() {

  return (
    <ProductsCartProvider>
    
     <RouterProvider router={router} />

    </ProductsCartProvider>
  )
}

export default App
