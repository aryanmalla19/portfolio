import React from 'react'

export default function Button({name,state}) {  
  return (
    <div className='lg:mr-3 mt-3 lg:mt-5'>
        <button className=''>
            <p className={`px-10 py-3 w-[340px] font-bold text-lg lg:text-xl border-2 border-solid rounded-lg ${state==='true'?"bg-orange border-orange text-white":"border-current text-orange bg-villa"}`}>{name}</p>
        </button>
    </div>
  )
}
