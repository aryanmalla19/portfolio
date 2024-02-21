import pfp from "../assets/pfp.jpg"
import React from 'react'
import Button from './Button'
import m from "../assets/FRONT END DEV.png"
import { Cursor, Typewriter } from "react-simple-typewriter"
import { PopupButton } from "react-calendly";
export default function Landing() {
  return (
    <div id="home" className='flex dark:bg-black dark:text-white flex-col-reverse md:flex md:flex-row mb-20 justify_between'>
      <div className='flex w-full md:w-8/12 flex-col'>
        <img src={m} className='w-[200px] dark:opacity-100 opacity-25 hidden md:block md:w-[350px] lg:w-[420px] my-3 md:mt-6' alt="img" />
        <p className='md:text-left text-center text-base md:text-2xl lg:text-3xl dark:text-white my-2 my-4 text-main'>👋 Hello there, I'm <span className="font-bold text-orange">
          <Typewriter words={['Aryan', 'Developer', 'Designer', 'Student']} loop={0} typeSpeed={190} deleteSpeed={130} />
        </span><span className="text-red-500"><Cursor /></span> </p>
        <h1 className={`text-center md:text-left text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white loose text-main font-poppins`}>Empowering brands with custom, high-converting websites</h1>
        <p className='text-center md:text-left text-md md:text-2xl lg:text-3xl dark:text-white text-main my-5'>that are appealing, brand-accurate, & user-friendly.</p>
        <div className='flex flex-col md:items-start lg:flex-row w-full items-center '>

          {/* <Button name='Book Free Discovery Call' state={`${true}`} /> */}
          <PopupButton className="transition-transform duration-300 dark:border-white transform hover:scale-105 lg:mr-3 mt-3 lg:mt-5 flex justify-center items-center lg:justify-start px-10 py-3 w-[300px] lg:w-[340px] font-bold text-base lg:text-xl border-2 border-solid rounded-lg bg-orange border-orange text-white"
            url="https://calendly.com/aryanmalla19/30min"
            rootElement={document.getElementById("root")}
            text="Book Free Discovery Call"
          />
          <Button name='View Client Projects' state={`${false}`} link="#project" />
        </div>
      </div>
      <div className="w-full md:w-5/12 flex justify-center items-center">
        <img src={pfp} className="rounded-md mt-7 md:rounded-full md:ml-10 w-10/12 md:w-11/12 md:mt-10" alt="pfp" />
      </div>
    </div>
  )
}
