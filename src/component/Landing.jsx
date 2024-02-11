import pfp from "../assets/pfp.jpg"
import React from 'react'
import Button from './Button'
import m from "../assets/FRONT END DEV.png" 

export default function Landing() {
  return (
    <div className='flex flex-col-reverse lg:flex lg:flex-row mb-20 justify_between'>
        <div className='flex w-full lg:w-8/12 flex-col'>
                <img src={m} className='w-[200px] hidden lg:block lg:w-[550px] my-3 lg:my-10' alt="img" />
                <p className='lg:text-left text-center text-base lg:text-3xl my-2 my-4 text-main'>👋 Hello there, I'm Aryan</p>
                <h1 className={`text-center lg:text-left text-2xl lg:text-6xl tracking-wide font-bold leading-tight text-main`}>Empowering brands with custom, high-converting websites</h1>
                <p className='text-center lg:text-left text-lg lg:text-3xl text-main my-5'>that are appealing, brand-accurate, & user-friendly.</p>
                <div className='flex flex-col lg:flex-row w-full items-center '>
                <Button name='Book Free Discovery Call' state={`${true}`} />
                <Button name='View Client Projects' state={`${false}`}/>
                </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center items-center">
          <img src={pfp} className="rounded-lg mt-7 lg:rounded-full lg:ml-10 w-10/12 lg:w-11/12 lg:mt-10" alt="pfp" />
        </div>
    </div>
  )
}
