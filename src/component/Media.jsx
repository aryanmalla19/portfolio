import React from 'react'
import {FaTwitter, FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"

export default function Media() {
    return (
        <div className='flex lg:w-3/12 mx-auto lg:mx-0 justify-between items-center mt-5 lg:mt-0'>
            <a href="https://twitter.com/aryanmalla19" target='_blank' rel="noreferrer">
                <FaTwitter className='text-white border-2 border-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://www.instagram.com/aryanmalla19/" target='_blank' rel="noreferrer">
                <FaInstagram className='text-white border-2 p-2 border-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://www.linkedin.com/in/aryanmalla19/" target='_blank' rel="noreferrer">
                <FaLinkedin className='text-white border-2 p-2 border-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
            <a href="https://github.com/aryanmalla19" target='_blank' rel="noreferrer">
                <FaGithub className='text-white border-2 p-2 border-current rounded-full p-1 lg:p-2 text-4xl lg:text-5xl mx-3' />
            </a>
        </div>

    )
}
