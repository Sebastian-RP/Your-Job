import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Carrito.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import loginEmail from '../../Components/Firebase/loginEmail';
import createCheckoutSession from '../../Components/Firebase/createACheckoutSession';
import { useDispatch, useSelector } from "react-redux";
import { addCarrito, clearCarrito } from "../../Redux/Actions/Actions";
import swal from "sweetalert";
import styled from "styled-components";

import {AiOutlineShoppingCart} from 'react-icons/ai'

const Carrito = () => {
    const navigate = useNavigate()
    const { user, isAuthenticated } = useAuth0(); 
    const carrito = useSelector((state)=> state.carrito)
    const dispatch = useDispatch();

    const autenticate = async () => {
        if(isAuthenticated && carrito.length > 0){  
            const result = await loginEmail(user,"123456", carrito)
            if(Array.isArray(result)){
                result.map(item =>
                    swal ( "Oops" ,  `${item}` ,  "error" )   
                )
            }
            else{
                createCheckoutSession(result, carrito)
                navigate('/checkout')
            } 
        }
        if(!isAuthenticated){
            swal({
                title: "Oops!",
                text: "To make a purchase you must add items to the cart",
                icon: "error",
                buttons:true
                }).then((data) => {
                if(data) navigate("/login");
            });
        }
        if(carrito.length === 0){
            swal ( "Oops" ,  "To make a purchase you must add items to the cart" ,  "error" )   
        }
    };

    const handledClick = (e) => {
        e.preventDefault()
        addCarrito(carrito.filter(item => item.name !== e.target.value)).then((action) => {
            dispatch(action);
        }
        )
        swal ( "Ready" ,  "Item removed from cart" ,  "success" )   
    }

    const handledEmpty = (e) => {
        e.preventDefault()
        clearCarrito([]).then((action) => {
            dispatch(action);
        }
        )
        swal ( "Ready" ,  "Empty cart" ,  "success" )   
    }

    return (
        <div className={style.Body}>
            <AiOutlineShoppingCart />
            <Button onClick={()=> navigate('/home')}>Back</Button>
            <Title2>Your cart:</Title2>
            <div className={style.Contenedor}>
                {carrito? carrito.map((producto, index) =>(
                    <div className={style.Products} key={index}>
                        <div className={style.ProductsName}>
                            <p><strong>{producto.name}</strong></p>
                        </div>
                        <div className={style.CloseButton}>
                            <ButtonClose onClick={handledClick} value={producto.name}>X</ButtonClose>
                        </div>
                    </div>
                )): <p>...Loading</p>}
            </div>
            <div>
                <Button onClick={autenticate}>Buy</Button>
                <ButtonOff onClick={handledEmpty}>Empty Cart</ButtonOff>
            </div>
      </div>
    )
}

export default Carrito

const Title2 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #dddddd;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
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


const ButtonOff = styled(Button)`
  background-color: #222222;
  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }
  `;

const ButtonClose = styled(Button)`
    background-color: #222222;
    font-size: 9px;
    border-radius: 100px;
`