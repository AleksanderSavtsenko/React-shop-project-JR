import Spinner from 'react-bootstrap/Spinner';


interface FullScreenLoaderProps {
  loading: boolean;
}

 function FullScreenLoader({loading}: FullScreenLoaderProps) {
    if(loading) {
        return (
            <div>
               <Spinner style = {{height: '100vh', width: '100vw,', display: 'flex',alignItems: 'center', justifyContent: 'center'}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
            </div>
        )
    }
}
export default FullScreenLoader