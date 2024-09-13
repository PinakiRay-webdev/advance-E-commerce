import React , {useContext , useEffect , useState} from 'react'
import { productContext } from '../../Context/context'
const Fashion = () => {

  const {products} = useContext(productContext);

  const [itemsCategory, setItemsCategory] = useState([])

  useEffect(()=>{
    if(products && products.productData)
    {
      const fashionCategory = products.productData.find(cat => cat.cat_name === 'Fashion');
      if(fashionCategory){
        setItemsCategory(fashionCategory.items)
      }
    }
  },[products])

  return (
    <div className='w-full h-fit py-12' >
    <div className='max-w-screen-xl mx-auto px-2' >
    <h1 className="font-semibold text-2xl">Fashion</h1>

    <div className="flex gap-6 px-8 py-4" >
            {itemsCategory.map((Element , id)=>(
                <p className="border w-fit px-4 py-2 bg-slate-300 capitalize rounded-lg cursor-pointer" key={id} >{Element.cat_name}</p>
            ))}
        </div>
    </div>
  </div>
  )
}

export default Fashion
