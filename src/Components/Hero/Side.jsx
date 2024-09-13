import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../Context/context';
import { Link } from 'react-router-dom';
const Side = () => {
  const { products } = useContext(productContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (products && products.productData) {
      setCategory(products.productData);
    }
  }, [products]);

  return (
    <div className='border-r w-1/5 flex flex-col gap-8 mt-8' >
      {category.map((element, id) => (
        <div key={id} className='flex items-center justify-between pr-5' >
          <Link to={`/${element.cat_name}`} >
          <p className='cursor-pointer'>{element.cat_name}</p>
          </Link>
          <img className='w-7'  src={element.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Side;
