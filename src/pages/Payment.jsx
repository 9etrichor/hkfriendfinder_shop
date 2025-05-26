import React from 'react'
import PayImage from '../components/PayImage'

import alipayhkSrc from "../assets/alipayhk.svg"
import fpsSrc from "../assets/fps.svg"

const Payment = () => {
  return (
    <div>
      <div >
        <h2 className='text-center text-4xl font-black'>付款方法</h2>
        <h3 className='text-center text-3xl max-w-1/3 m-auto'>付款後請連截圖轉賬憑據並傳送至本店Whatsapp客服PayPal(+5%)行政費，Fps/Alipayhk/Payme(+0%)</h3>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
        <PayImage payMethod="alipay" imgSrc={alipayhkSrc} />
        <PayImage payMethod="fps" imgSrc={fpsSrc} />
      </div>
    </div>
  )
}

export default Payment