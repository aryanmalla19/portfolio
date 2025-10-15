import React from 'react'
import { useState,useEffect } from 'react';
import cartoon from "../assets/2.png"
export default function Client() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
      const handleClassChange = () => {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setDark(isDarkMode);
      };
      const observer = new MutationObserver(handleClassChange);
      observer.observe(document.documentElement, { attributes: true });
      handleClassChange();
      return () => {
          observer.disconnect();
      };
  }, []);

  return (
    <div id='project' className='md:pt-24 sticky md:flex-col justify-center items-center top-0 lg:flex-none lg:justify-none lg:items-none'>
      <h1 className='text-3xl md:mt-2 text-center md:text-left md:text-4xl lg:text-6xl dark:text-white tracking-wide font-bold leading-tight text-main'>My Projects</h1>
      <p className='text-base text-center md:text-left md:text-xl text-main dark:text-white my-5'>I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.</p>
      <img src={cartoon} className={`mx-auto md:h-[200px] h-[150px] md:ml-10`} alt="my-project-photo" />
      <p className='text-base text-center md:text-left md:text-xl lg:text-2xl dark:text-white text-main my-5'>All the sites on your right are built from scratch in the following stack:</p>
      <ul className='flex w-full justify-center lg:justify-start items-center flex-wrap list-disc'>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>PHP</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Laravel</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Jquery</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>JavaScirpt</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Ajax</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Node js</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>React js</li>
        <li className='text-main dark:text-white text-base md:text-md mx-4 my-1 md:mx-6 font-bold'>Tailwind CSS</li>
      </ul>
    </div>  
  )
}
