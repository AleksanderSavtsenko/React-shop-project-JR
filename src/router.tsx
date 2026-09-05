import {createBrowserRouter} from 'react-router';

import ProductsPage from './pages/products/productsPage.tsx'

import ProductDetailsPage from './pages/products-details/ProductDetailsPage.tsx';
import SignInPage from './pages/sign-in/SignInPage.tsx';

const router = createBrowserRouter([
    {
    path: '/',
    element: <ProductsPage/>
    },
    {
        path: '/product-details/:id',
        element: <ProductDetailsPage/> 
    },
    {
        path: '/sign-in',
        element: <SignInPage/>
    }
]);

export default router;

