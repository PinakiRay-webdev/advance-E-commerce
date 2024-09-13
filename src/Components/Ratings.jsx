import React from 'react'
import { FaStar } from "react-icons/fa";
const Ratings = ({rating}) => {
  return (
    <div className='flex' >
      {[...Array(rating)].map(()=>{
        return(
            <p className='text-sm text-amber-500' ><FaStar/></p>
        )
      })}
            {[...Array(5-rating)].map(()=>{
        return(
            <p className='text-sm text-gray-600' ><FaStar/></p>
        )
      })}
    </div>
  )
}

export default Ratings
