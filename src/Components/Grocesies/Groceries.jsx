import React, { useContext, useState, useEffect } from "react";
import { productContext } from "../../Context/context";
import Ratings from "../Ratings";

const Groceries = () => {
  const { products } = useContext(productContext);

  const [itemCategory, setItemCategory] = useState([]);
  const [activeCategory, setactiveCategory] = useState(null);

  useEffect(() => {
    if (products && products.productData) {
      const groceryItems = products.productData.find(
        (cat) => cat.cat_name === "groceries"
      );
      if (groceryItems) {
        setItemCategory(groceryItems.items);
        setactiveCategory(groceryItems.items[0])
      }
    }
  }, [products]);

  const handleCategory = (category) => {
    setactiveCategory(category);
  };

  return (
    <div className="w-fll h-fit py-12">
      <div className="max-w-screen-xl mx-auto px-2">
        <h1 className="font-semibold text-2xl">Groceries</h1>

        <div className="flex gap-6 px-8 py-4">
          {itemCategory.map((Element, id) => (
            <p
              className={`border w-fit px-4 py-2 capitalize rounded-lg cursor-pointer ${activeCategory === Element ? "bg-blue-400" : "bg-slate-300"}`}
              key={id}
              onClick={() => handleCategory(Element)}
            >
              {Element.cat_name}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-5 py-8 gap-6">
          {activeCategory &&
            activeCategory.products.map((Element, id) => {
              return (
                <div className="w-52 h-[20rem] cursor-pointer py-3 shadow-2xl rounded-md relative">
                  <img className="w-36 mx-auto" src={Element.catImg} alt="" />
                  <p className="text-sm py-2" key={id}>
                    {`${Element.productName}`.length < 24 ? Element.productName : `${Element.productName}`.substring(0,20)+"....more"}
                  </p>
                  <div className="flex gap-2 items-center pt-2">
                    <p className="text-sm text-red-600">${Element.price}</p>
                    <p className="line-through text-gray-400">
                      {Element.oldPrice}
                    </p>
                  </div>

                  <Ratings rating={Math.floor(Element.rating)} />

                  <p className="bg-red-600 text-white w-fit p-1 rounded-full text-xs absolute top-4 left-1 ">%{Element.discount}-</p>

                  <p className="text-sm py-3" >Brand: {Element.brand}</p>

                  <div className="flex absolute w-full bottom-0" >
                    <button className="bg-slate-200 w-full py-1" >Buy Now</button>
                    <button className="bg-black text-white w-full" >Add to cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Groceries;
