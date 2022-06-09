import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./Carrito.module.css";
import { useCarritoContext } from '../../Context/carritoContext'
import { useAuth0 } from '@auth0/auth0-react';

const Carrito = () => {
    const {carrito} = useCarritoContext()
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading } = useAuth0(); 

    const autenticate = () => {
        if(isAuthenticated && carrito.length > 0){
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
            {/* <div className='relative'>
                <div className='absolute top-0 left-0 bg-slate-600/40 w-screen h-screen z-30
                backdrop-blur-sm flex flex-col justify-center items-center'>
                    <div className='bg-white w-1/3 h-1/3'>
                        <h3>Inicia sesion o registrate</h3>
                    </div>
                </div>
            </div> */}
            <button className={style.Button} onClick={()=> navigate(-1)}>Back</button>

            {carrito? carrito.map(producto =>(
            <p>{producto.name}</p>
        )): <p>...Loading</p>}
        <button className={style.Button} onClick={autenticate}>Comprar</button>
        </div>
    )
}

export default Carrito

