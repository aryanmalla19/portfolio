import React from 'react'
import Button from './Button'

export default function Service() {
    return (
        <div id='service' className='my-20 w-full lg:w-10/12 mx-auto'>
            <h1 className='text-4xl lg:text-6xl text-center text-main font-bold mb-4'>Services</h1>
            <p className='text-base lg:text-lg text-center text-main'>Seen my work?</p>
            <p className='text-base lg:text-lg text-center text-main'>These are the services I've provided up there!</p>
            <div className='flex w-full flex-wrap my-5'>
                <div className='w-6/12 flex flex-col items-center justify-center my-14'>
                    <img className='h-[40px] lg:h-[70px]' src="https://varunbhabhra.com/static/media/ui.02b229f58e64fdac83b6.webp" alt="" />
                    <p className='mt-5 text-xl lg:text-2xl font-semibold text-center text-main'>UI Design</p>
                </div>
                <div className='w-6/12 flex flex-col items-center justify-center'>
                    <img className='h-[40px] lg:h-[70px]' src="https://varunbhabhra.com/static/media/ux.022908573bce6cfd9441.webp" alt="" />
                    <p className='mt-5 text-xl lg:text-2xl font-semibold text-center text-main'>UX Design</p>
                </div>
                <div className='w-6/12 flex flex-col items-center justify-center'>
                    <img className='h-[40px] lg:h-[70px]' src="https://varunbhabhra.com/static/media/content.b26e4a0075cb35e7cce0.webp" alt="" />
                    <p className='mt-5 text-xl lg:text-2xl font-semibold text-center text-main'>Content Writing</p>
                </div>
                <div className='w-6/12 flex flex-col items-center justify-center'>
                    <img className='h-[40px] lg:h-[70px]' src="https://varunbhabhra.com/static/media/dev.d622fe8c134d4d92f71a.webp" alt="" />
                    <p className='mt-5 text-xl lg:text-2xl font-semibold text-center text-main'>Web Development</p>
                </div>
            </div>
            <div className='w-full flex mt-14 justify-center items-center'>
            <Button name='Ask for quotation' state={`${true}`} />
            </div>
        </div>
    )
}
