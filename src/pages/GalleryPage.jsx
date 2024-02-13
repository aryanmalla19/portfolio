import React from 'react'
import Gallery from '../component/Gallery'
import Header from '../component/Header'

export default function Gallery_page({data}) {
  return (
    <div>
        <Header/>
        <Gallery data={data}/>
    </div>
  )
}
