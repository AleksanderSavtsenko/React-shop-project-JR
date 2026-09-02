import {createBrowserRouter} from 'react-router';

import ProductsPage from './pages/products/productsPage.tsx'

import ProductDetailsPage from './pages/products-details/ProductDetailsPage.tsx';

const router = createBrowserRouter([
    {
    path: '/',
    element: <ProductsPage/>
    },
    {
        path: '/product-details/:id',
        element: <ProductDetailsPage/>
    }
]);

export default router;

