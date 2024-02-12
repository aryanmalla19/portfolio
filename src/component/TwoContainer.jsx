import React from 'react'

export default function TwoContainer(data) {
  const svg_img = data?.data
  console.log(svg_img?.skills)
  return (
    <div className='my-20 flex lg:flex-row flex-col'>
        <div className='lg:w-6/12 w-full'>
            <h1 className='text-6xl text-main font-bold'>Skills</h1>
            <div className='w-full flex flex-wrap m-5 items-center justify-start'>
              {
              svg_img?.skills.map((e)=>{
                return(
                  <div className='w-3/12 my-7'>
                    <img className='w-5/12 ' src={e.img} alt="imgg" />
                  </div>
                )
              })
              }  
            </div>
        </div>
        <div className='lg:w-6/12 w-full pt-9 lg:pt-0 border-t-2 lg:border-t-0 lg:border-l-2 border-current pb-5'>
            <div className='lg:w-10/12 w-11/12 mx-auto'>
            <h1 className='text-4xl text-center lg:text-6xl text-main font-bold mb-7'>About</h1>
            <p className='text-base text-justify text-main'>Hey👋, my name is Varun Bhabhra! I'm a self-taught developer & designer from West Bengal, India, who is really into unique designs, user experience and writing clean code. <br /> <br /> Speaking of myself while studying B.com(Hons) in Accountancy from University of Calcutta (Surprise!), web development crossed my way and since then my journey as a developer begun. Currently I'm working as a freelance developer, I've always taken deep interest in designing and developing beautiful websites for my clients which focus on providing the best experience for everyone using them. Designing is something that needs patience, effort and time. I am here to give in all of it and make sure that my work becomes my identity. Being a minimalist, my belief is to make things simple and very specific. I'm open to learning and working my level best to make the results near to perfect.</p>
        </div>
            </div>
    </div>
  )
}
