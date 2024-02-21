import React from 'react'

export default function Button({name,state,link}) {  
  return (
    <a href={link}>
    <div className='lg:mr-3 mt-3 lg:mt-5 flex justify-center items-center lg:justify-start'>
        <button className='transition-transform duration-300 dark:text-white transform hover:scale-105'>
            <p className={`px-10 py-3 w-[300px] lg:w-[340px] font-bold text-base lg:text-xl dark:border-white border-2 border-solid rounded-lg  ${state==='true'?"bg-orange border-orange text-white":"border-current dark:border-white text-orange bg-villa hover:bg-orange hover:border-orange hover:text-white"}`}>{name}</p>
        </button>
    </div>
    </a>
  )
}
