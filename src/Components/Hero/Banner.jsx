import React from 'react'
import appleLogo from '../../assets/appleLogo.svg'
import iphoneBg from '../../assets/iphoneBg.svg'
const Banner = () => {
  return (
    <div className='bg-black w-full h-fit ml-7 mt-8' >
      <div className='flex justify-between items-center' >
        <div className='flex flex-col gap-4 pl-16 py-4' >
            <header className='flex items-center gap-3' >
                <img className='w-8' src={appleLogo} alt="" />
                <span className='text-white text-sm' >iPhone 15 series</span>
            </header>
            <h1 className='text-white  text-6xl leading-[4.5rem]' >Up to 10% <br /> off Voucher</h1>
            <button className='text-white font-light w-fit border-b' >Shop Now</button>
        </div>
        <img src={iphoneBg} alt="" />
      </div>
    </div>
  )
}

export default Banner
