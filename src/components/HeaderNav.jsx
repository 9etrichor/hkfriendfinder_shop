//ok
import React from 'react'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router'
import hkfriend from "../assets/hkfriend.jpeg"

const Header = () => {
  //for small screen menu navigation
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    //make the header stick on top and not cover the content below
    <div className='fixed top-0 left-0 z-50 w-full'>
    <div className='flex justify-between px-[10vw] py-5'>

      {/* left side icon and shop name */}
      <div className='flex items-center'>
        <Avatar src={hkfriend} />
        <p className='text-2xl font-bold'>
          <Link to="/home">hkfriendfinder</Link>
        </p>
      </div>

      {/* right side navigation for PC screen */}
      <div className='font-light hidden md:block'>
        <Link className='inline-block ml-8' to="/home">首頁</Link>
        <Link className='inline-block ml-8' to="/payment">支付方法</Link>
        <Link className='inline-block ml-8' to="/commonqa">常見問題</Link>
        <Link className='inline-block ml-8' to="/aboutus">關於本店</Link>
      </div>

      {/* right side navigation for small screen */}
      <div className="block md:hidden">
        <IconButton 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className='bg-black text-black'
          >
          <MenuIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{'aria-labelledby': "basic-button"}}
          >
          <MenuItem onClose={handleClose}>
            <Link className='w-full h-full' to="/home">首頁</Link>
          </MenuItem>
          <MenuItem onClose={handleClose}>
            <Link className='w-full h-full' to="/payment">支付方法</Link>
          </MenuItem>
          <MenuItem onClose={handleClose}>
            <Link className='w-full h-full' to="/commonqa">常見問題</Link>
          </MenuItem>
          <MenuItem onClose={handleClose}>
            <Link className='w-full h-full' to="/aboutus">關於本店</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
    </div>
  )
}

export default Header