import React from 'react'
import Button from './Button'

export default function Green({title,para,btnText,photo}) {
  return (
    <div className='flex w-11/12 mx-auto justify-between bg-hariyo rounded-lg'>
        <div className='ml-14 w-5/12 my-14'>
            <h1 className='text-5xl text-main font-bold'>{title}</h1>
            <p className='mt-6 mb-11 text-lg text-main'>
            {para}
            </p>
            <Button name={btnText} state={`${true}`}/>
        </div>
        <div className='w-5/12 mt-5 mb-5'>
            <img src={photo} className='h-[300px]' alt="graphics" />
        </div>
    </div>
  )
}
