import React, { useState } from 'react';
import logo from "../assets/R (2).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Media from './Media';
import { Link } from 'react-router-dom';

export default function Header() {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "My Projects", link: "#project" },
    { name: "Services", link: "#service" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const item = document.getElementById(id);
    if (item) {
      window.scrollTo({
        top: item.offsetTop - 100 ,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='flex z-[50] w-full bg-villa flex-row sticky top-0 justify-between'>
      <Link className='w-3/12' to='/'>
        <img className='lg:h-[85px] lg:w-[150px] md:h-[55px] md:w-[110px] w-[80px] h-[40px] lg:mt-2 mt-3 lg:ml-8' src={logo} alt="logo" />
      </Link>
      <div className='w-9/12 flex justify-end'>
        <div className={`h-screen flex flex-col duration-300 bg-main fixed top-0 w-8/12 lg:w-4/12 md:w-5/12 xl:w-3/12 transition-all ease-in ${open ? 'right-0 ':'right-[-500px]'}`}>
          <ul className={`flex flex-col mt-20 md:items-center h-auto md:z-auto z-[10] `}>
            {Links.map((link) => (
              <li key={link.name} className='text-xl font-semibold text-center my-4'>
                <Link
                  to={`/`}
                  onClick={() => { setOpen(!open); handleScroll(link.link.slice(1)); }} // Pass the id to handleScroll
                  className='text-villa hover:text-orange duration-500'
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link to='/gallery' className='text-villa font-poppins text-xl font-semibold text-center my-4 hover:text-orange duration-500'>Gallery</Link>
          </ul>
          <h1 className='text-center text-villa text-lg my-3 font-light'>DON'T BE A STRANGER!</h1>
          <div className='h-[40px]'>
            <div className="w-6/12 border-r-2 h-full border-solid border-villa"></div>
            <div className="w-6/12"></div>
          </div>
          <div className='w-9/12 ml-3 py-6 md:mx-auto'>
            <Media/>
          </div>
        </div>
        <div className='md:flex z-[50] items-center justify-between py-4 md:px-10 px-7'>
          <div onClick={() => setOpen(!open)} className='z-[50] text-3xl sticky right-8 top-6 cursor-pointer h-[30px] justify-center items-center'>
            <RxHamburgerMenu className={`${open ? 'hidden' : 'menu'} z-[50] p-2 lg:py-2 lg:px-3 text-white rounded-full bg-main w-[40px] h-[40px] md:w-[50px] md:h-[50px]`} />
            <IoCloseOutline className={`${open ? 'menu' : 'hidden'} z-[50] p-1 lg:py-2 lg:px-3 rounded-full bg-villa w-[40px] h-[40px] md:w-[50px] md:h-[50px]`} />
          </div>
        </div>
      </div>
    </div>
  );
}
