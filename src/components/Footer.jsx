//lack the correspoding link
import React from 'react'
import { Link } from 'react-router'
import { Avatar } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='py-4 bg-gray-200 100vw h-28 md:flex md:items-center md:justify-center gap-8'>
      <p className='font-semibold text-sm'>Copyright © 2025 hkfriendfinder All rights reserved.</p>
      <div className='flex gap-8'>
        <Link>
            <WhatsAppIcon className='min-h-16 min-w-16 rounded-full bg-[#24d137] text-white'/>
        </Link>
      
        <Link>
            <InstagramIcon className='min-h-16 min-w-16 rounded-full bg-[#833ab4] bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white' />
        </Link>
      </div>

    </div>
  )
}

export default Footer