import React , {useState , useEffect} from 'react'
import Navbar from './Components/Navbar'
import productInfo from './Data/product.json'
import { productContext } from './Context/context'
import Hero from './Components/Hero/Hero'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Groceries from './Components/Grocesies/Groceries'
import Electronics from './Components/Electronics.jsx/Electronics'
import Fashion from './Components/Fashion/Fashion'
const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productInfo);
  },[])

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Hero/></>
    },
    {
      path: '/groceries',
      element: <><Navbar/><Hero/><Groceries/></>
    },
    {
      path: '/Electronics',
      element: <><Navbar/><Hero/><Electronics/></>
    },
    {
      path: '/Fashion',
      element: <><Navbar/><Hero/><Fashion/></>
    }
  ])

  return (
    <productContext.Provider value={{products , setProducts}}>
      <RouterProvider router={myRouter} />
    </productContext.Provider>
  )
}

export default App
