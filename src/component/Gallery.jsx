import React, { useState, useEffect } from 'react'

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
  console.log(data?.images[0])
  return (
    <div className={`w-full`}>
      <h1 className='text-center text-main my-2 font-bold text-3xl md:text-4xl lg:text-6xl'>My Gallery</h1>
      <div className={`w-full md:w-5/12 mt-6 flex justify-evenly ${loading ? "hidden" : "block"}`}>
        {categories.map((cat) => (
          <div key={cat.value}>
            <label htmlFor={cat.id}>
              <input type="checkbox" name={cat.value} id={cat.value} className='hidden' onChange={handleChange} value={cat.value} checked={selectCategories === parseInt(cat.value)} />
              <span className={`text-main cursor-pointer  transition duration-200  lg:hover:text-orange font-semibold px-[10px] py-[5px] text-lg md:text-2xl ${parseInt(cat.value) === selectCategories ? "active" : ""}`}>{cat.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div class={`p-5 md:p-10 ${loading ? "hidden" : "block"}`}>
        <div class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {data?.images[2].gallery.map((e) => {
            if (selectCategories === 0) {
              return (
                <img src={e.img} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
              )
            } else if (e.id === selectCategories) {
              return (
                <img src={e.img} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
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
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
        </div>

      </div>
    </div>
  )
}
