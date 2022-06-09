import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./Carrito.module.css";
import {useCarritoContext } from '../../Context/carritoContext'


const Carrito = () => {
    const {carrito} = useCarritoContext()
    const navigate = useNavigate()


    return (
        <div>
            <button className={style.Button} onClick={()=> navigate('/products')}>Back</button>

            {carrito? carrito.map(producto =>(
            <p>{producto.name}</p>
        )): <p>...Loading</p>}

        </div>
    )
}

export default Carrito

