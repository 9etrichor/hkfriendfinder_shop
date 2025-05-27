//lack layout and information
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavDisplay from '../components/NavDisplay';

const aboutusText = "Hk_friends_finder 係全港最大的交友平台，希望大家都可以搵到自己的真心朋友。現時已經擴張為香港最大嘅合租平台，透過家庭會員，令大家可以平啲咁購買Premium服務，交友同時也可以享受優質的應用程式。"

const Aboutus = () => {
  return (
    <div className='bg-gray-800'>
      <NavDisplay texts={"關於本店"} />
      <div className='max-w-xl m-auto py-16 text-white'>
        <FormatQuoteIcon />
        <p className='text-2xl'>
          {aboutusText}
        </p>
        <div className='flex justify-end'>
          <FormatQuoteIcon className='text-right' />
        </div>
      </div>
    </div>
  )
}

export default Aboutus