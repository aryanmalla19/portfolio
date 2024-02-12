import React from 'react'
export default function Client() {
  return (
    <div className='sticky top-0'>
      <h1 className='text-3xl text-center md:text-left md:text-6xl tracking-wide font-bold leading-tight text-main'>My Projects</h1>
      <p className='text-base text-center md:text-left md:text-xl text-main my-5'>I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.</p>
      <img src='https://varunbhabhra.com/static/media/portfolioDoodle.bc1fc5721437180c4b90a9b4274c9b11.svg' className='md:h-[300px] h-[150px] ml-10 transform -scale-x-100' alt="idk" />
      <p className='text-base text-center md:text-left md:text-2xl text-main my-5'>All the sites on your right are built from scratch in the following stack:</p>
      <ul className='flex w-full justify-center items-center flex-wrap list-disc'>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>React js</li>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Node js</li>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Tailwind CSS</li>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>HTML</li>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>CSS</li>
        <li className='text-main text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>JavaScirpt</li>
      </ul>
    </div>
  )
}
