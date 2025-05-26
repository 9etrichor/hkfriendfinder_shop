//ok
import React from 'react'
import { Link } from 'react-router'

//used in payment page. click to correspoding payment method page. the method and correspoding image src from parent element
const PayImage = ({payMethod, imgSrc}) => {
  //get the click link
  const link = "/payment/" + payMethod
  return (
    <Link className=' shadow-lg min-w-3xs w-[40vw] py-8 flex items-center justify-center' to={link}>
        <img src={imgSrc} className='w-32' /> 
    </Link>
  )
}

export default PayImage