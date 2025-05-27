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
      <img className='min-h-72 h-[50vh] w-auto' src={data.imgSrc} alt="" />
    </div>
  )
}

export default PaymentDetail