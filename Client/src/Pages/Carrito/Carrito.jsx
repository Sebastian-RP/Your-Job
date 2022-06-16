import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Carrito.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import loginEmail from '../../Components/Firebase/loginEmail';
import createCheckoutSession from '../../Components/Firebase/createACheckoutSession';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { addCarrito, clearCarrito } from "../../Redux/Actions/Actions";
import swal from "sweetalert";


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
            swal ( "Oops" ,  "Para realizar una compra debes estar autenticado" ,  "error" )   
        }
        if(carrito.length === 0){
            swal ( "Oops" ,  "Para realizar una compra debes añadir elementos al carrito" ,  "error" )   
        }
    };

    const handledClick = (e) => {
        e.preventDefault()
        addCarrito(carrito.filter(item => item.name !== e.target.value)).then((action) => {
            dispatch(action);
        }
        )
        swal ( "Listo" ,  "Elemento eliminado del carrito" ,  "success" )   
    }

    const handledEmpty = (e) => {
        e.preventDefault()
        clearCarrito([]).then((action) => {
            dispatch(action);
        }
        )
        swal ( "Listo" ,  "Carrito vacio" ,  "success" )   
    }

    return (
        <div className={style.Body}>
            <Button className={style.Button} onClick={()=> navigate('/home')}>Back</Button>
            <h1>Elementos en carrito:</h1>
            <div className={style.Contenedor}>
                {carrito? carrito.map((producto, index) =>(
                    <div className={style.Products} key={index}>
                        <div className={style.ProductsName}>
                            <p><strong>{producto.name}</strong></p>
                        </div>
                        <div className={style.CloseButton}>
                            <Button className="btn-danger" onClick={handledClick} value={producto.name}>X</Button>
                        </div>
                    </div>
                )): <p>...Loading</p>}
            </div>
            <div>
                <Button className={style.Button} onClick={autenticate}>Comprar</Button>
                <Button className={`btn-danger ${style.Button}`} onClick={handledEmpty}>Vaciar Carrito</Button>
            </div>
      </div>
    )
}

export default Carrito

