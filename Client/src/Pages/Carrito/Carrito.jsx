import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {useCarritoContext } from '../../Context/carritoContext'


const Carrito = () => {
    const {carrito} = useCarritoContext()
    const navigate = useNavigate()


    return (
        <div>
            <Button onClick={()=> navigate('/products')}>Back</Button>

            {carrito? carrito.map(producto =>(
            <p>{producto.name}</p>
        )): <p>...Loading</p>}

        </div>
    )
}

export default Carrito

const Button = styled.button`
    background-color: #f5f5f5;
    border: none;
    color: #000;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`