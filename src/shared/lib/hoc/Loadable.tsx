import { Suspense, type ComponentType, } from "react";
import FullScreenLoader from "../../ui/FullScreenLoader";


const Loadable = (Component: ComponentType) => (props: Record<never, never>)=> {
    return (
       
        <Suspense fallback={FullScreenLoader({loading: true})}>
            <Component {...props} />
        </Suspense>
   
    )
}

export default Loadable 
