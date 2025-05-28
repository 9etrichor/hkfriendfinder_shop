//lack the correspoding link
import React from 'react'
import { Link } from 'react-router'
import { Avatar } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import carousell from "../assets/carousell.png"

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=85246191307&text&type=phone_number&app_absent=0"
  const igLink = "https://www.instagram.com/hk_friends_finder?igsh=bHJoZ25jajV4MnJ0&utm_source=qr"
  return (
    <div className='py-4 bg-gray-200 w-full  h-28 md:flex md:items-center md:justify-center gap-8'>
      <p className='font-semibold text-sm'>Copyright © 2025 hkfriendfinder All rights reserved.</p>
      <div className='flex gap-8'>
        <Link to={whatsappLink} >
            <WhatsAppIcon className='min-h-16 min-w-16 rounded-full bg-[#24d137] text-white'/>
        </Link>
      
        <Link to={igLink}>
            <InstagramIcon className='min-h-16 min-w-16 rounded-full bg-[#833ab4] bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white' />
        </Link>

        <Link>
          <img src={carousell} className='block h-16 w-16 rounded-full' alt="" />
        </Link>
      </div>

    </div>
  )
}

export default Footer