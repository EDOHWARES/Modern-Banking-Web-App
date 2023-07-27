import React from 'react';
import {close, logo, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";

const Navbar = () => {

  const [toggle, setToggle] = React.useState(false);

  const toggleNav = () => {
    setToggle((prevState) => {
      return !prevState
    })
  }
  return (
    <nav className='text-white flex w-full py-6 justify-between items-center navbar'>
        <img src={logo} alt="hoobank" className='w-[124px] h-[32px] cursor-pointer' />

        <ul className='list-none sm:flex hidden justify-end items-center'>
          {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"} border-b border-transparent duration-75 hover:border-b hover:border-white`}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>

            </li>
          ))}
        </ul>
        <div className='sm:hidden cursor-pointer'>
            <img onClick={toggleNav} src={toggle ? close : menu} alt="" />
        </div>

        <div className={`${toggle ? "flex" : "hidden"} bg-gradient-to-r from-gray-600 to-gray-900 rounded-l-xl absolute right-0 top-[5rem] min-w-[10rem] min-h-[5rem] sidebar p-6 z-[6]`}>
        <ul className='font-poppins list-none flex flex-col justify-end items-start'>
          {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`mb-4 hover:bg-dimWhite hover:text-black`}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>

            </li>
          ))}
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
