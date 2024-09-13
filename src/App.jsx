import React , {useState , useEffect} from 'react'
import Navbar from './Components/Navbar'
import productInfo from './Data/product.json'
import { productContext } from './Context/context'
import Hero from './Components/Hero/Hero'
const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productInfo);
  },[])

  return (
    <productContext.Provider value={{products , setProducts}}>
      <Navbar/>
      <Hero/>
    </productContext.Provider>
  )
}

export default App
