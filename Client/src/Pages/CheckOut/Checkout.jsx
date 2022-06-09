import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Checkout.module.css'

const Checkout = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button className={style.Button} onClick={()=> navigate(-1)}>Back</button>
      <h1>This is the Checkout</h1>
    </div>
  )
}

export default Checkout;