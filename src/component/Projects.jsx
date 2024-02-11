import React from 'react'
import Button from './Button'

export default function Projects(data) {
  const projects_data = data.data
  return (
    <div className='lg:w-9/12 lg:mx-auto mt-14 lg:mt-0'>
      {projects_data?.map((e) => {
        return (
          <a key={e.title} href={e.a} target='_blank' rel="noreferrer">
          <div className='lg:mb-20 mb-8'>
            <img className='w-full' src={e.img} alt="" />
            <h1 className='text-4xl font-bold text-main ml-1 mt-3'>{e.title}</h1>
            <p className='text-lg text-main my-2'>{e.details}</p>
            <Button name="View Live" stats={`${false}`} />
          </div>
          </a>
        )
      })}
    </div>
  )
}
