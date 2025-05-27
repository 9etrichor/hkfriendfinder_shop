import React from 'react'

import bg from '../assets/bg.jpg'


const NavDisplay = ({texts}) => {
  return (
    <div
      style={{backgroundImage: `url(${bg})`}}
      className='h-[60vh] w-screen bg-cover bg-top bg-no-repeat flex justify-center items-center'>
        <div className='md:w-[50vw] px-8 md:px-0'>
          <h1 className='text-white font-bold text-center text-5xl opacity-100'>{texts}</h1>
        </div>
    </div>
  )
}

export default NavDisplay