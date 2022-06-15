import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Carrito.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import loginEmail from '../../Components/Firebase/loginEmail';
import createCheckoutSession from '../../Components/Firebase/createACheckoutSession';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { addCarrito, clearCarrito } from "../../Redux/Actions/Actions";


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
                    alert(`${item}`)    
                )
            }
            else{
                createCheckoutSession(result, carrito)
                navigate('/checkout')
            } 
        }
        if(!isAuthenticated){
            alert("Para realizar una compra debes estar autenticado")
        }
        if(carrito.length === 0){
            alert("Para realizar una compra debes añadir elementos al carrito")
        }
    };

    const handledClick = (e) => {
        e.preventDefault()
        addCarrito(carrito.filter(item => item.name !== e.target.value)).then((action) => {
            dispatch(action);
        }
        )
        alert("Elemento eliminado del carrito")
    }

    const handledEmpty = (e) => {
        e.preventDefault()
        clearCarrito([]).then((action) => {
            dispatch(action);
        }
        )
        alert("Carrito vaciado")
    }

    return (
        <div className={style.Body}>
            <Button className={style.Button} onClick={()=> navigate('/home')}>Back</Button>
            <h1>Elementos en carrito:</h1>
            <div className={style.Contenedor}>
                {carrito? carrito.map((producto, index) =>(
                    <div className={style.Products} key={index}>
                        <p>{producto.name}</p>
                        <Button onClick={handledClick} value={producto.name}>Eliminar</Button>
                    </div>
                )): <p>...Loading</p>}
            </div>
        <Button className={style.Button} onClick={autenticate}>Comprar</Button>
        <Button className={style.Button} onClick={handledEmpty}>Vaciar Carrito</Button>
      </div>
    )
}

export default Carrito

