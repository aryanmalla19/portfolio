import React from 'react'
import {FaTwitter, FaInstagram, FaGithub} from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/ti";
export default function Media() {
    return (
        <div className='flex lg:w-3/12 mx-auto lg:mx-0 justify-between items-center mt-5 lg:mt-0'>
            <a href="https://twitter.com/aryanmalla19" target='_blank' rel="noreferrer">
                <FaTwitter className='text-white transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 border-2 outline-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://www.instagram.com/aryanmalla19/" target='_blank' rel="noreferrer">
                <FaInstagram className='text-white transition-transform duration-300 transform hover:scale-110 hover:text-red-500 border-2 p-2 outline-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://www.linkedin.com/in/aryanmalla19/" target='_blank' rel="noreferrer">
                <TiSocialLinkedin  className='text-white transition-transform duration-300 transform hover:scale-110 li border-2 ouline-current rounded-full p-1 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://github.com/aryanmalla19" target='_blank' rel="noreferrer">
                <FaGithub className='text-white transition-transform duration-300 transform hover:scale-110 hover:text-black border-2 p-2 outline-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
        </div>

    )
}
