import React , {useContext , useEffect , useState} from 'react'
import { productContext } from '../../Context/context'
const Electronics = () => {

  const {products} = useContext(productContext);

  const [itemsCategory, setItemsCategory] = useState([])

  useEffect(()=>{
    if(products && products.productData){
      const electricCategory = products.productData.find(cat => cat.cat_name === 'Electronics');
      if(electricCategory){
        setItemsCategory(electricCategory.items)
      }
    }
  },[products])

  return (
    <div className='w-full h-fit py-12' >
      <div className='max-w-screen-xl mx-auto px-2' >
      <h1 className="font-semibold text-2xl">Electronics</h1>
      
      <div className="flex px-8 py-4 gap-6" >
            {itemsCategory.map((Element , id)=>(
                <p className="border w-fit px-4 py-2 bg-slate-300 capitalize rounded-lg cursor-pointer" key={id} >{Element.cat_name}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Electronics
