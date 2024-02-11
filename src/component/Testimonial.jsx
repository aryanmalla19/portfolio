import React from 'react'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx"
import cartoon from "../assets/testimonialDoodle.svg"

export default function Testimonial(testi_data) {
    const data = testi_data?.data
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }
    const next = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }
    return (
        <div className='flex my-14 justify-around'>
            <div className='w-5/12'>
                <h1 className='text-6xl text-main font-bold'>Testimonial</h1>
                <p className='text-base text-main my-7'>Have a look what my clients think about my work!</p>
                <img className='w-9/12' src={cartoon} alt="" />
            </div>
            <div className='w-7/12'>
                <div className='flex flex-col relative w-11/12 mx-auto'>
                    {/* <img src={photo} className='rounded-lg w-[60px]' alt="" /> */}
                    <h2 className='text-xl text-main font-semibold text-center'>{data?.[currentIndex].name}</h2>
                    <h4 className='text-base text-main text-center my-2'>{data?.[currentIndex].place}</h4>
                    <p className='my-7 text-sm text-main text-center'>{data?.[currentIndex].saying}</p>
                    <div className='absolute top-[90%] w-[45px] -translate-x-0 translate-y-[50%] left-[-10%] flex items-center justify-center text-2xl rounded-full p-2 bg-black/20 text-center cursor-pointer'>
                        <BsChevronCompactLeft onClick={prev} size={30} />
                    </div>
                    <div className='absolute top-[90%] w-[45px] -translate-x-0 translate-y-[50%] right-[-10%] flex items-center justify-center text-2xl rounded-full p-2 bg-black/20 text-center cursor-pointer'>
                        <BsChevronCompactRight onClick={next} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {data?.map((slide, slideIndex) => {
                            return (
                                <div key={slideIndex} onClick={() => { setCurrentIndex(slideIndex) }} className={`text-4xl cursor-pointer text-main ${slideIndex===currentIndex?"text-orange":""}`}>
                                    <RxDotFilled />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
