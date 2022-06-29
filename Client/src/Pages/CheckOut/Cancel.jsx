import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { clearCarrito } from '../../Redux/Actions/Actions'
import { useDispatch } from 'react-redux';


function Canceled() {
  const dispatch = useDispatch();

  useEffect(()=>{
    clearCarrito([]).then((action) => {
        dispatch(action);
    }
    )
  }, [])

  function handledHome(e) {
    e.preventDefault();
    var daddy = window.self;
    daddy.opener = window.self;
    daddy.close();
  }

  return (
    <Body>
      <h1>Your purchase has been canceled!</h1>
      <p>You can close this window</p>
      <Button onClick={handledHome}>Close</Button>
    </Body>
  )
}

export default Canceled


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 5px);
    background-color: #1C5D99;
    color: white;
    padding: 10px;
    transition: all 300ms;
    h1{
      font-size: 38px;
      word-spacing: -5px;
      letter-spacing: -2px;
      font-weight: bolder;
    }

    p{
        margin-bottom: 10px;
    }   
`;

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