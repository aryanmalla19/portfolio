import React from 'react'
import Button from './Button'
import cartoon from "../assets/cartoon_right.svg"

export default function Contact() {
    return (
        <div className='flex justify-between my-24'>
            <div className='w-4/12'>
                <h1 className='text-main text-6xl font-bold my-3'>Get In Touch !</h1>
                <p className='text-base text-main my-7'>Fill out the form and I will reach out, as soon as possible!</p>
                <img src={cartoon} alt="" />
            </div>
            <div className='w-7/12'>
                <form method="post" className='w-11/12 mt-10 mx-auto flex flex-col'>
                    <label className='text-main text-xl font-semibold' htmlFor="name">Name</label>
                    <input className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' type="text" id="name" name="name" placeholder="Your name" required />
                    <br /><br />
                    <label className='text-main text-xl font-semibold' htmlFor="email">Email</label>
                    <input className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' type="email" id="email" name="email" placeholder="youremail@meow.com" required />
                    <br /><br />
                    <label className='text-main text-xl' htmlFor="message">Message</label>
                    <textarea className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' id="message" name="message" placeholder="Write your message" required></textarea>
                    <br />
                <Button name='Send' state={`${true}`}/>
                </form>
            </div>
        </div>
    )
}
