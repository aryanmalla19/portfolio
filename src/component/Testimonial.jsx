import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'; // corrected import statement
import cartoon from '../assets/testimonialDoodle.svg';

export default function Testimonial({ data }) { // corrected prop destructuring
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(data?(data):"mr")
    const prev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const next = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className='flex lg:flex-row flex-col my-14 justify-around'>
            <div className='lg:w-5/12 w-full md:ml-3 lg:mb-0'>
                <h1 className='text-center lg:text-left text-4xl lg:text-6xl text-main font-bold'>Testimonial</h1>
                <p className='text-center lg:text-left text-base text-main my-7'>Have a look what my clients think about my work!</p>
                <img className='mx-auto lg:w-9/12 w-11/12 lg:mx-0 hidden md:block' src={cartoon} alt="" />
            </div>
            <div className='lg:w-7/12 w-full'>
                <div className='w-full overflow-hidden relative flex'>

                    {data? (data.map((e, index) => (
                        <div key={index} className='min-w-full flex'>
                            <div className='transition-transform duration-500 ease-out md:pt-2' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                <img src={e.img} className='rounded-full hover:opacity-95 hover:border-orange border-transparent border-2 peer cursor-pointer mx-auto w-[100px] mb-4 h-[100px] md:w-[120px] md:h-[120px]' alt="" />
                                <h2 className='text-xl text-main font-semibold text-center '>{e.name}</h2>
                                <h4 className='text-base text-main text-center mb-2 mt-1'>{e.place}</h4>
                                <p className='lg:my-7 my-3 w-10/12 mx-auto text-sm text-main font-normal text-center'>{e.saying}</p>
                            </div>
                        </div>
                    ))):("")
                }
                </div>
                <div className='flex flex-col relative w-11/12 mx-auto'>
                    <div className='absolute top-[0%] w-[45px] hover:bg-orange hover:text-white -translate-x-0 translate-y-[50%] left-[0%] md:left-[10%] flex items-center justify-center text-2xl rounded-full p-2 bg-black/20 text-center cursor-pointer'>
                        <BsChevronCompactLeft onClick={prev} size={30} />
                    </div>
                    <div className='absolute top-[0%] w-[45px] hover:bg-orange hover:text-white -translate-x-0 translate-y-[50%] right-[0%] md:right-[10%] flex items-center justify-center text-2xl rounded-full p-2 bg-black/20 text-center cursor-pointer'>
                        <BsChevronCompactRight onClick={next} size={30} />
                    </div>
                    <div className='flex top-4 justify-center transition-all duration-500 ease-in py-2'>
                        {data?(data.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className={`hover:text-red-400 text-4xl cursor-pointer text-main ${slideIndex === currentIndex ? 'text-orange' : ''}`}>
                                <RxDotFilled />
                            </div>
                        ))):("")}
                    </div>
                </div>
            </div>
        </div>
    );
}
