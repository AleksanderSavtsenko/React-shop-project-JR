import {lazy} from "react";
import Loadable from "./shared/lib/hoc/Loadable.tsx";


//eslint-disable-next-line react-refresh/only-export-components
//@ts-expect-error
export const ProductsPageLazy = Loadable(lazy(async () => {
    try {
    return await import('./pages/products/productsPage.tsx')
    }
    catch {
        window.location.reload();
    }

}))