import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./Carrito.module.css";
import { useCarritoContext } from '../../Context/carritoContext'
import { useAuth0 } from '@auth0/auth0-react';
import loginEmail from '../../Components/Firebase/loginEmail';
import createCheckoutSession from '../../Components/Firebase/createACheckoutSession';

const Carrito = () => {
    const {carrito} = useCarritoContext()
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading } = useAuth0(); 


    const autenticate = async () => {
        if(isAuthenticated && carrito.length > 0){
            const result = await loginEmail("test@test.com","123456")
            createCheckoutSession(result.user.uid, carrito)
            navigate('/checkout')
        }
        if(!isAuthenticated){
            alert("Para realizar una compra debes estar autenticado")
        }
        if(!(carrito.length > 0)){
            alert("Para realizar una compra debes añadir elementos al carrito")
        }
    }

    return (
        <div>
            <button className={style.Button} onClick={()=> navigate(-1)}>Back</button>
            <div className={style.Contenedor}>
                {carrito? carrito.map((producto, index) =>(
                    <div className={style.Products} key={index}>
                        <p>{producto.name}</p>
                    </div>
                )): <p>...Loading</p>}
            </div>

        <button className={style.Button} onClick={autenticate}>Comprar</button>
        </div>
    )
}

export default Carrito

