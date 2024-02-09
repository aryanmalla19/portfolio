import React from 'react'

export default function TwoContainer() {
  return (
    <div className='my-20 flex'>
        <div className='w-6/12'>
            <h1 className='text-6xl text-main font-bold'>Skills</h1>

        </div>
        <div className='w-6/12 border-l-2 border-current pb-5'>
            <div className='w-10/12 mx-auto'>
            <h1 className='text-6xl text-main font-bold mb-7'>About</h1>
            <p className='text-base text-justify text-main'>Hey👋, my name is Varun Bhabhra! I'm a self-taught developer & designer from West Bengal, India, who is really into unique designs, user experience and writing clean code. <br /> <br /> Speaking of myself while studying B.com(Hons) in Accountancy from University of Calcutta (Surprise!), web development crossed my way and since then my journey as a developer begun. Currently I'm working as a freelance developer, I've always taken deep interest in designing and developing beautiful websites for my clients which focus on providing the best experience for everyone using them. Designing is something that needs patience, effort and time. I am here to give in all of it and make sure that my work becomes my identity. Being a minimalist, my belief is to make things simple and very specific. I'm open to learning and working my level best to make the results near to perfect.</p>
        </div>
            </div>
    </div>
  )
}
