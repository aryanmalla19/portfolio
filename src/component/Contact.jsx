import React, { useState, useEffect } from 'react';
import cartoon from "../assets/cartoon_right.svg";
import cartoon1 from "../assets/3.png";

export default function Contact() {
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
        <div id='contact' className='flex lg:flex-row flex-col justify-evenly my-24'>
            <div className='lg:w-5/12 w-full'>
                <h1 className='text-main text-center lg:text-left dark:text-orange text-4xl lg:text-6xl font-bold my-3'>Get In Touch !</h1>
                <p className='text-base text-center lg:text-left dark:text-white text-main my-7'>Fill out the form and I will reach out, as soon as possible!</p>
                <img src={dark ? cartoon1 : cartoon} className='mx-auto' alt="img" />
            </div>
            <div className='lg:w-6/12 w-full'>
                <form action='https://getform.io/f/qaQYPYan' method="post" className='w-11/12 mt-10 mx-auto flex flex-col'>
                    <label className='text-main dark:text-white text-xl font-semibold' htmlFor="name">Name</label>
                    <input className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' type="text" id="name" name="name" placeholder="Your name" required />
                    <br />
                    <label className='text-main dark:text-white text-xl font-semibold' htmlFor="email">Email</label>
                    <input className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' type="email" id="email" name="email" placeholder="youremail@meow.com" required />
                    <br />
                    <label className='text-main dark:text-white font-semibold text-xl' htmlFor="message">Message</label>
                    <textarea className='p-3 my-2 bg-villa border-2 rounded-lg text-base border-main' id="message" name="message" placeholder="Write your message" required></textarea>
                    <br />
                    <button className="w-[150px] bg-main h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange before:to-orange before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
