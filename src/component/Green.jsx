import React from 'react'
import Button from './Button'

export default function Green({title,para,btnText,photo}) {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center lg:justify-between bg-hariyo rounded-lg'>
        <div className='lg:ml-14 w-10/12 mx-auto lg:w-5/12 my-5 lg:my-14'>
            <h1 className='text-3xl text-center lg:text-left lg:text-5xl text-main font-bold'>{title}</h1>
            <p className='mt-6 mb-7 text-center lg:text-left lg:mb-11 text-base lg:text-lg text-main'>
            {para}
            </p>
            <Button name={btnText} state={`${true}`}/>
        </div>
        <div className='w-10/12 mx-auto lg:w-5/12 mt-5 mb-5'>
            <img src={photo} className='md:h-[300px] mx-auto' alt="graphics" />
        </div>
    </div>
  )
}
