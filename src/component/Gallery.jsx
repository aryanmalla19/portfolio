import React, { useState, useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";

export default function Gallery() {
  const categories = [
    {
      value: '0',
      label: 'ALL'
    },
    {
      value: '1',
      label: 'Basketball'
    },
    {
      value: '2',
      label: 'Family'
    },
    {
      value: '3',
      label: 'Solo'
    }
  ]
  const [data, setData] = useState();
  const [selectCategories, setSelectCategories] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('data.json').then((response) => {
      setLoading(true)
      return response.json();
    }).then((data) => {
      setData(data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  const handleChange = (e) => {
    if (parseInt(e.target.value) === selectCategories) {
      setSelectCategories(0)
    }
    else {
      setSelectCategories(parseInt(e.target.value))
    }
  }
  const [dataa, setDataa] = useState({ img: '', i: 0 })
  const viewImage = (img, i) => {
    setDataa({ img, i })
  }
  const imAction = (action) => {
    if(!action){
      setDataa({img:"",i:0})
    }
  }
  return (
    <div className={`w-full`}>
      {
        dataa.img &&
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          top: '0',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems:'center',
          overflow: 'hidden',
          zIndex: "100",
          
        }}>
          <button onClick={() => imAction()} style={{ position: 'absolute', top: '10px', right: '10px',background:"red" }}><IoCloseSharp className='text-4xl text-white'/></button>
          <img src={dataa.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} alt="" />
        </div>
      }
      <h1 className='text-center text-main my-2 font-bold text-3xl dark:text-orange md:text-4xl lg:text-6xl'>My Gallery</h1>
      <div className={`w-full md:w-5/12 mt-6 flex justify-evenly ${loading ? "hidden" : "block"}`}>
        {categories.map((cat) => (
          <div key={cat.value}>
            <label htmlFor={cat.id}>
              <input type="checkbox" name={cat.value} id={cat.value} className='hidden' onChange={handleChange} value={cat.value} checked={selectCategories === parseInt(cat.value)} />
              <span className={`text-main cursor-pointer  transition duration-200 dark:text-white lg:hover:text-orange font-semibold px-[10px] py-[5px] text-lg md:text-2xl ${parseInt(cat.value) === selectCategories ? "active" : ""}`}>{cat.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className={`p-5 md:p-10 ${loading ? "hidden" : "block"}`}>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {data?.images[2].gallery.map((e, i) => {
            if (selectCategories === 0) {
              return (
                <img src={e.img} key={i} onClick={() => { viewImage(e.img, i) }} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
              )
            } else if (e.id === selectCategories) {
              return (
                <img src={e.img} key={i} onClick={() => { viewImage(e.img, i) }} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
              )
            }
            else {
              return (
                <div></div>
              )
            }
          })}
        </div>
      </div>
      <div className={`flex w-full h-64 justify-center items-center ${loading ? "flex" : "hidden"}`}>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
        </div>

      </div>
    </div>
  )
}
