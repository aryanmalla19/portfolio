import React from 'react'
import Gallery from '../component/Gallery'
import Header from '../component/Header'

document.documentElement.classList.toggle("dark");

export default function Gallery_page({data}) {
  return (
    <div className='dark:bg-black'>
        <Header />
        <Gallery data={data?(data):"mr"} />
    </div>
  )
}
