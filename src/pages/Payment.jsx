import React from 'react'
import PayImage from '../components/PayImage'
import NavDisplay from '../components/NavDisplay'

import alipayhkSrc from "../assets/alipayhk.svg"
import fpsSrc from "../assets/fps.svg"
import paymeSrc from "../assets/payme.svg"
import paypalSrc from "../assets/paypal.png"

const Payment = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <div >
        <NavDisplay texts={"付款方法"} />
        <h3 className='pt-16 text-center text-3xl max-w-1/3 m-auto'>付款後請連截圖轉賬憑據並傳送至本店Whatsapp客服PayPal(+5%)行政費，Fps/Alipayhk/Payme(+0%)</h3>
      </div>
      <div className='flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-8 pb-16'>
        <PayImage payMethod="alipay" imgSrc={alipayhkSrc} />
        <PayImage payMethod="fps" imgSrc={fpsSrc} />
        <PayImage payMethod="paypal" imgSrc={paypalSrc} />
        <PayImage payMethod="payme" imgSrc={paymeSrc} />
      </div>
    </div>
  )
}

export default Payment