import pfp from "../assets/pfp.jpg"
import React from 'react'
import Button from './Button'
import m from "../assets/FRONT END DEV.png" 
import {Cursor, Typewriter } from "react-simple-typewriter"
export default function Landing() {
  return (
    <div id="home" className='flex flex-col-reverse md:flex md:flex-row mb-20 justify_between'>
        <div className='flex w-full md:w-8/12 flex-col'>
                <img src={m} className='w-[200px] opacity-25 hidden md:block md:w-[350px] lg:w-[450px] my-3 md:mt-6' alt="img" />
                <p className='md:text-left text-center text-base md:text-2xl lg:text-3xl my-2 my-4 text-main'>👋 Hello there, I'm <span className="font-bold text-orange">
                <Typewriter words={['Aryan','Developer','Designer','Student']} loop={0} typeSpeed={190} deleteSpeed={130}/>
                  </span><span className="text-red-500"><Cursor/></span> </p>
                <h1 className={`text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-bold loose text-main font-poppins`}>Empowering brands with custom, high-converting websites</h1>
                <p className='text-center md:text-left text-md md:text-2xl lg:text-3xl text-main my-5'>that are appealing, brand-accurate, & user-friendly.</p>
                <div className='flex flex-col md:items-start lg:flex-row w-full items-center '>
                <Button name='Book Free Discovery Call' state={`${true}`} />
                <Button name='View Client Projects' state={`${false}`} link="#project" />
                </div>
        </div>
        <div className="w-full md:w-6/12 flex justify-center items-center">
          <img src={pfp} className="rounded-md mt-7 md:rounded-full md:ml-10 w-10/12 md:w-11/12 md:mt-10" alt="pfp" />
        </div>
    </div>
  )
}
