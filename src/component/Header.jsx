import React from 'react'
import logo from "../assets/R (2).png"

export default function Header() {
  return (
    <div>
        <div>
        <img className='lg:h-[85px] lg:w-[150px] md:h-[55px] md:w-[110px] w-[80px] h-[40px] lg:mt-2 mt-3 lg:ml-8' src={logo} alt="logo" />
        </div>
    </div>
  )
}
