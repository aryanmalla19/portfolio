import React from 'react'
import Button from './Button'

export default function Projects(data) {
  const projects_data = data.data
  return (
    <div className='md:w-9/12 md:mx-auto mt-14 md:mt-0'>
      {projects_data?.map((e) => {
        return (
          <a key={e.title} href={e.a} target='_blank' rel="noreferrer">
          <div className='md:mb-20 text-center md:text-left mb-8 transition-transform duration-300 transform hover:scale-105'>
            <img className='w-full' src={e.img} alt="" />
            <h1 className='text-2xl dark:text-orange md:text-4xl font-bold text-main ml-1 my-3'>{e.title}</h1>
            <p className='text-base dark:text-white text-md lg:text-xl text-main my-3 mb-6'>{e.details}</p>
            <Button name="View Live" stats={`${false}`} />
          </div>
          </a>
        )
      })}
    </div>
  )
}
