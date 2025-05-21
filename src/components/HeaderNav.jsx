import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router'
import hkfriend from "../assets/hkfriend.jpeg"

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
    <div className='flex justify-between px-[10vw] py-5'>
      <div className='flex items-center'>
        <Avatar src={hkfriend} />
        <p className='text-2xl font-bold'>
          <Link to="/home">hkfriendfinder</Link>
        </p>
      </div>

      <div className='font-light hidden md:block'>
        <Link className='inline-block ml-8' to="/home">home</Link>
        <Link className='inline-block ml-8' to="/payment">Payment</Link>
        <Link className='inline-block ml-8' to="/commonqa">Q&A</Link>
        <Link className='inline-block ml-8' to="/aboutus">About Us</Link>
      </div>
    </div>
    </div>
  )
}

export default Header