import React from 'react'
import { PopupButton } from "react-calendly";


export default function Green({title,para,btnText,photo,link}) {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center lg:justify-between bg-hariyo rounded-lg'>
        <div className='lg:ml-14 w-10/12 mx-auto lg:w-5/12 my-5 lg:my-14'>
            <h1 className='text-3xl text-center lg:text-left lg:text-5xl text-main font-bold'>{title}</h1>
            <p className='mt-6 mb-7 text-center lg:text-left lg:mb-11 text-base lg:text-lg text-main'>
            {para}
            </p>
            <PopupButton className="dark:border-white transition-transform duration-300 transform hover:scale-105 lg:mr-3 mt-3 lg:mt-5 flex justify-center items-center px-10 py-3 w-[300px] lg:w-[340px] font-bold text-base lg:text-xl border-2 border-solid rounded-lg bg-orange border-orange text-white"
            url="https://calendly.com/aryanmalla19/30min"
            rootElement={document.getElementById("root")}
            text="Schedule A Call"
          />
        </div>
        <div className='w-10/12 mx-auto lg:w-5/12 mt-5 mb-5'>
            <img src={photo} className='md:h-[300px] mx-auto' alt="graphics" />
        </div>
    </div>
  )
}
