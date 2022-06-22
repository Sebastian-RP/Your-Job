import React from 'react'
import style from './Checkout.module.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate()

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

  function handledHome(e) {
    e.preventDefault();
    navigate(`/home`);
  }
  return (
    <div className={style.contenedor}>
      <div>
        <h1>Waiting for redirection to payment page. </h1>
        <p>Please wait...</p>
        <Button onClick={handledHome}>Home</Button>
      </div>
    </div>
  )
}

export default Checkout;

const Button = styled.button`
  background-color: #1C5D99;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  padding: 7px 10px 7px 10px ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }
`;