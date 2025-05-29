import React from 'react'
import { useParams } from 'react-router'

import payAlipay from '../assets/payAlipay.jpeg'
import payPayme from '../assets/payPayme.jpeg'
import payPayPal from '../assets/payPayPal.jpeg'

const paymentData = {
  alipay: {
    imgSrc: payAlipay,
    texts: ["Alipay", "Thomas"],
  },

  payme: {
    imgSrc: payPayme,
    texts: ["Payme" , "Elvis"],
  },

  paypal: {
    imgSrc: payPayPal,
    texts: ["Paypal", "Thomas"],
  },

  fps: {
    texts: ["FPS" , "70135439", "Lam C K D"]
  }
}

const PaymentDetail = () => {
  const param = useParams()
  const pay_method = param.paymethod
  const data = paymentData[pay_method]
  return (
    <div className='bg-gray-800 text-white text-4xl pl-[10vw] py-16'>
      {data.texts.map(text => 
        <h3 className='mb-8'>{text}</h3>
      )}
      {data.imgSrc ? <img className='min-h-72 h-[50vh] w-auto' src={data.imgSrc} alt="" /> : null}

      <h4 className='pt-16 text-3xl max-w-2/3 md:max-w-1/3 font-light'>付款後請連截圖轉賬憑據並傳送至本店Whatsapp客服</h4>
      <h4 className='py-16 text-3xl max-w-2/3 md:max-w-1/3 font-light'>PayPal(+5%)行政費，Fps/Alipayhk/Payme(+0%)</h4>
    </div>
  )
}

export default PaymentDetail