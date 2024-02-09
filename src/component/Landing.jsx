import pfp from "../assets/pfp.jpg"
import React from 'react'
import Button from './Button'
import m from "../assets/FRONT END DEV.png" 

export default function Landing() {
  return (
    <div className='flex mb-20 justify_between'>
        <div className='flex w-8/12 flex-col'>
                <img src={m} className='w-[550px] my-10' alt="" />
                <p className='text-3xl my-4 text-main'>👋 Hello there, I'm Aryan</p>
                <h1 className={`text-6xl tracking-wide font-bold leading-tight text-main`}>Empowering brands with custom, high-converting websites</h1>
                <p className='text-3xl text-main my-5'>that are appealing, brand-accurate, & user-friendly.</p>
                <div className='flex'>
                <Button name='Book Free Discovery Call' state={`${true}`} />
                <Button name='View Client Projects' state={`${false}`}/>
                </div>
        </div>
        <div>
          <img src={pfp} className="rounded-full ml-10 w-11/12 mt-10" alt="pfp" />
        </div>
    </div>
  )
}
