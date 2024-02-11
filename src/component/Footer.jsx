import React from 'react'
import pfp from "../assets/pfp.jpg"
import {FaTwitter, FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"

export default function Footer() {
  return (
    <div className='w-full bg-main'>
        <div className='w-11/12 flex pt-14 pb-8 border-b-2 mx-auto border-white'>
            <div className='mt-13 flex w-full justify-between'>
                <div className='flex'>
                    <img className='w-[80px] mx-3 border-2 border-white rounded-full' src={pfp} alt="" />
                    <h1 className='ml-1 mt-2 text-lg text-white'>Designed & Developed with 💚 & ☕ by <br /><span className='font-semibold'>Aryan Malla</span></h1>
                </div>
                <div className='flex w-3/12 justify-between items-center'>
                  <a href="https://twitter.com/aryanmalla19" target='_blank' rel="noreferrer">
                  <FaTwitter className='text-white border-2 p-2 border-current rounded-full text-5xl mx-3' />
                  </a>
                  <a href="https://www.instagram.com/aryanmalla19/" target='_blank' rel="noreferrer">
                  <FaInstagram className='text-white border-2 p-2 border-current rounded-full text-5xl mx-3'/>
                  </a>
                  <a href="https://www.linkedin.com/in/aryanmalla19/" target='_blank' rel="noreferrer">
                  <FaLinkedin className='text-white border-2 p-2 border-current rounded-full text-5xl mx-3'/>
                  </a>
                  <a href="https://github.com/aryanmalla19" target='_blank' rel="noreferrer">
                  <FaGithub className='text-white border-2 p-2 border-current rounded-full text-5xl mx-3'/>
                  </a>
                </div>
            </div>
        </div>
                <p className='w-full mt-10 pb-20 text-white text-center text-lg'>All rights reserved | Copyright © 2024 Aryan Malla</p>
    </div>
  )
}
