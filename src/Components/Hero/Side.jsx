import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../Context/context';
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
        <p className='cursor-pointer' key={id}>{element.cat_name}</p>
      ))}
    </div>
  );
}

export default Side;
