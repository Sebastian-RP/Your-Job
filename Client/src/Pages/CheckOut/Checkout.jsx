import React from 'react'
import style from './Checkout.module.css'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCarrito } from '../../Redux/Actions/Actions';

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    clearCarrito([]).then((action) => {
        dispatch(action);
    }
    )
  }, [])

  function resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter5Seconds(10);
    if(x === 10) {
      navigate('/home')
    }
  }
  f1()

  return (
    <div className={style.contenedor}>
      <div>
        <h1>Waiting for redirection to payment page. </h1>
        <p>This will be opening in a pop up window. Please wait...</p>
      </div>
    </div>
  )
}

export default Checkout;
