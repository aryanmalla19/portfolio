import React from 'react'
import pfp from "../assets/pfp.jpg"
import Media from './Media'

export default function Footer() {
  return (
    <div className='w-full bg-main'>
        <div className='w-11/12 flex pt-14 pb-8 border-b-2 mx-auto border-white'>
            <div className='mt-13 flex lg:flex-row flex-col w-full justify-between'>
                <div className='flex lg:flex-row flex-col justify-center items-center'>
                    <img className='w-[80px] mx-3 border-2 border-white rounded-full' src={pfp} alt="" />
                    <h1 className='ml-1 mt-2 text-center lg:text-left text-base lg:text-lg text-white'>Designed & Developed with 💚 & ☕ by <br /><span className='font-semibold'>Aryan Malla</span></h1>
                </div>
                <Media/>
            </div>
        </div>
                <p className='w-9/12 mx-auto lg:mx-0 lg:w-full mt-10 pb-20 text-white text-center text-base lg:text-lg'>All rights reserved | Copyright © 2024 Aryan Malla</p>
    </div>
  )
}
