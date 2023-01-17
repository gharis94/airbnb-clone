import React from 'react';
import {FaAirbnb} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import {HiSearch,HiMenu,HiUserCircle} from 'react-icons/hi';
import {TbWorld} from 'react-icons/tb'
const Header = () => {
  return (
    <div className='bg-white grid grid-cols-3 py-4 drop-shadow-lg '>
        <div className='flex items-center pl-6'>
            <FaAirbnb className='text-red-500 h-6 w-6'/>
        </div>
        <div>
            <div className='flex drop-shadow-lg bg-white rounded-lg py-1'>
                <input type='text' placeholder='Search' className='bg-transparent flex-grow pl-2 outline-none'/>
                <HiSearch className='hidden sm:inline h-6 w-6  bg-red-500 rounded-full p-1 text-white mx-2 cursor-pointer' />
            </div>
        </div>
        <div className='flex items-center space-x-1 justify-end pr-2'>
            <p className='text-sm'>Airbnb your home</p>
            <TbWorld/>
            <div className='flex space-x-1 bg-white drop-shadow-lg p-1 rounded-full'>
                <HiMenu className='h-6 w-6'/>
                <HiUserCircle className='h-6 w-6'/>
            </div>
        </div>
    </div>
  )
}

export default Header


