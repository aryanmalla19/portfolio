import React from 'react'

export default function Button({name,state}) {  
  return (
    <div className='mr-3 mt-5'>
        <button className=''>
            <p className={`px-10 py-3 font-bold text-xl border-2 border-solid rounded-lg ${state==='true'?"bg-orange border-orange text-white":"border-current text-orange bg-villa"}`}>{name}</p>
        </button>
    </div>
  )
}
