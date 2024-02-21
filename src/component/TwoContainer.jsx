import React from 'react'

export default function TwoContainer(data) {
  const svg_img = data?.data
  return (
    <div id='about' className='my-20 flex lg:flex-row flex-col'>
      <div className='lg:w-6/12 w-full'>
        <h1 className='text-4xl lg:text-6xl text-center lg:text-left text-main dark:text-orange font-bold'>Skills</h1>
        <div className='w-full flex flex-wrap m-5 items-center justify-start'>
          {
            svg_img?.skills.map((e) => {
              return (
                <div className='w-3/12 transition-transform duration-300 transform hover:scale-110 cursor-pointer my-7'>
                  <img className='w-5/12' src={e.img} alt="imgg" />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='lg:w-6/12 w-full pt-9 lg:pt-0 border-t-2 lg:border-t-0 lg:border-l-2 border-current pb-5'>
        <div className='lg:w-10/12 w-11/12 mx-auto'>
          <h1 className='text-4xl text-center lg:text-6xl text-main dark:text-orange font-bold mb-7'>About</h1>
          <p className='text-base text-justify dark:text-white text-main'>Hey👋, I'm Aryan Malla Thakuri! I'm a self-taught developer & designer from Kathmandu, Nepal, who is really into unique designs, user experience and writing clean code.
            <br /> <br />
            Speaking of myself while studying at Sunway College (Surprise!), web development crossed my way and since then my journey as a developer begun. Currently I'm working as a freelance developer, I've always taken deep interest in designing and developing beautiful websites for my clients which focus on providing the best experience for everyone using them. Designing is something that needs patience, effort and time. I am here to give in all of it and make sure that my work becomes my identity. Being a minimalist, my belief is to make things simple and very specific. I'm open to learning and working my level best to make the results near to perfect.</p>

          <div className='my-8 justify-center items-center flex flex-col md:flex-row w-full justify-between'>
            <a href="https://github.com/aryanmalla19" target='_blank' rel="noreferrer">
              <button class="flex w-[200px] gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900">
                <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                Github
              </button>
            </a>
            <a href="CV.pdf" download>
            <button class="h-[50px] w-[200px] my-4 md:my-0 cursor-pointer group relative flex gap-1.5 px-7 bg-gradient-to-r from-gray-800 to-black py-3 bg-black hover:from-black hover:to-gray-900 hover:bg-opacity-100 bg-opacity-90 text-[#f1f1f1] hover:scale-105 rounded-3xl hover:border-gray-800 transition font-semibold shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
              Download CV
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
