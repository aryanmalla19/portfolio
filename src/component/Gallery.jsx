import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export default function Gallery({ data }) {
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
  ];

  const [selectCategories, setSelectCategories] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState({ img: '', i: 0 });
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setTimeout(() => {
        setGalleryImages(data.images[2].gallery);
        setLoading(false);
      }, 1000);
    }
  }, [data]);

  const handleChange = (e) => {
    setSelectCategories(parseInt(e.target.value));
  };

  const viewImage = (img, i) => {
    setSelectedImage({ img, i });
  };

  const closeImage = () => {
    setSelectedImage({ img: '', i: 0 });
  };

  if (loading) {
    return null; // Don't render anything while loading
  }

  return (
    <div className={`w-full`}>
      {selectedImage.img && (
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          top: '0',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: "100",
        }}>
          <button onClick={closeImage} style={{ position: 'absolute', top: '10px', right: '10px', background: "red" }}>
            <IoCloseSharp className='text-4xl text-white' />
          </button>
          <img src={selectedImage.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} alt="" />
        </div>
      )}
      <h1 className='text-center text-main my-2 font-bold text-3xl dark:text-orange md:text-4xl lg:text-6xl'>My Gallery</h1>
      <div className={`w-full md:w-5/12 mt-6 flex justify-evenly ${loading ? "hidden" : "block"}`}>
        {categories.map((cat) => (
          <div key={cat.value}>
            <label htmlFor={cat.value}>
              <input type="checkbox" name={cat.value} id={cat.value} className='hidden' onChange={handleChange} value={cat.value} checked={selectCategories === parseInt(cat.value)} />
              <span className={`text-main cursor-pointer  transition duration-200 dark:text-white lg:hover:text-orange font-semibold px-[10px] py-[5px] text-lg md:text-2xl ${parseInt(cat.value) === selectCategories ? "active" : ""}`}>{cat.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className={`p-5 md:p-10 ${loading ? "hidden" : "block"}`}>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {galleryImages.map((e, i) => {
            if (selectCategories === 0 || e.id === selectCategories) {
              return (
                <img src={e.img} key={i} onClick={() => { viewImage(e.img, i) }} className='transition-transform duration-300 cursor-pointer transform hover:scale-105' alt="img" />
              )
            } else {
              return null;
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
  );
}
