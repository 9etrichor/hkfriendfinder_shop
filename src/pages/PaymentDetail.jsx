import React from 'react'
import { useParams } from 'react-router'

const PaymentDetail = () => {
  const param = useParams()
  const pay_method = param.paymethod
  return (
    <div>PaymentDetail + {pay_method}</div>
  )
}

export default PaymentDetail