import React from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom';

function Canceled() {
  // const navigate = useNavigate()

  // function resolveAfter5Seconds(x) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 5000);
  //   });
  // }
  
  // async function f1() {
  //   var x = await resolveAfter5Seconds(10);
  //   if(x === 10) {
  //     navigate('/home')
  //   }
  // }
  // f1()

  // function handledHome(e) {
  //   e.preventDefault();
  //   navigate(`/home`);
  // }

  return (
    <Body>
      <h1>Your purchase has been canceled!</h1>
      <p>You can close this window</p>
      {/* <Button onClick={handledHome}>Home</Button> */}
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
        margin-bottom: 10px;
        font-size: 2.5rem;
        font-weight: bold;
    }

    p{
        margin-bottom: 10px;
    }   
`;

// const Button = styled.button`
//   background-color: #1C5D99;
//   border-radius: 5px;
//   border: 1px solid white;
//   color: white;
//   padding: 7px 10px 7px 10px ;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   transition: all 300ms;

//   &:hover {
//     color: #222222;
//     background-color: #FFFFFF;
//   }
// `;