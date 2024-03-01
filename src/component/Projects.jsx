import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { ApiContext } from '../api/ApiContext'

export default function Projects() {
  const apiData = useContext(ApiContext);
  const [data,setData] = useState();
  useEffect(()=>{
    if(apiData?.images){
      setData(apiData.projects)
    }
  },[apiData])
  return (
    <div className='md:w-9/12 md:mx-auto mt-14 md:mt-0'>
      {data?.map((e) => {
        return (
          <div key={e.title} className='md:mb-20 text-center md:text-left mb-8 transition-transform duration-300 transform hover:scale-105'>
            <img className='w-full' src={e.img} alt="" />
            <h1 className='text-2xl dark:text-orange md:text-4xl font-bold text-main ml-1 my-3'>{e.title}</h1>
            <p className='text-base dark:text-white text-md lg:text-xl text-main my-3 mb-6'>{e.details}</p>
            <Button name="View Live" stats={`${false}`} link={e.a}/>
          </div>
        )
      })}
    </div>
  )
}
