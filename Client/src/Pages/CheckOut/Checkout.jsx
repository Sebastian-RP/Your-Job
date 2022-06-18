import React from 'react'
import style from './Checkout.module.css'

const Checkout = () => {

  return (
    <div className={style.contenedor}>
      <div>
        <h1>Waiting for redirection to payment page. </h1>
        <p>Please wait...</p>
      </div>
    </div>
  )
}

export default Checkout;