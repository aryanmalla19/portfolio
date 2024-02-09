import React from 'react'
import pfp from "../assets/pfp.jpg"

export default function Footer() {
  return (
    <div className='w-full bg-main'>
        <div className='w-11/12 flex pt-14 pb-8 border-b-2 mx-auto border-white'>
            <div className='mt-13 flex w-5/12 flex-col justify-between'>
                <div className='flex'>
                    <img className='w-[80px] mx-3 border-2 border-white rounded-full' src={pfp} alt="" />
                    <h1 className='ml-1 mt-2 text-lg text-white'>Designed & Developed with 💚 & ☕ by <br /><span className='font-semibold'>Aryan Malla</span></h1>
                </div>
                <div className='flex w-4/12'>

                </div>
            </div>
        </div>
                <p className='w-full mt-10 pb-20 text-white text-center text-lg'>All rights reserved | Copyright © 2024 Aryan Malla</p>
    </div>
  )
}
