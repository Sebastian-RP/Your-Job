import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../Components/Firebase/credenciales'
import {doc, collection, getDoc} from 'firebase/firestore'
import styled from 'styled-components'
import { useCarritoContext } from '../../Context/carritoContext'


async function getProduct(id){
    const colectionRef = collection(db, 'products')
    const docRef = doc(colectionRef, id)
    const snapDoc = await getDoc(docRef)
    const product = snapDoc.data()
    console.log(product)
    return product
}

const Product = () => {
    const [productInfo, setProductInfo] = useState(null)
    const id = useParams().id

    const {carrito, setCarrito} = useCarritoContext()

    const navigate = useNavigate()

    useEffect(() => {
        getProduct(id).then((product) => {
            setProductInfo(product)
        })
    }, [id])

    const addToCarrito = () => {
        console.log(carrito)
        carrito ? setCarrito([...carrito, productInfo]): carrito.push(productInfo)
        navigate('/carrito')
    }

  return (
    <StyledProducts>
        <Button onClick={()=> navigate('/products')}>Back</Button>
        <h1>Detalles del Producto ID: {id}</h1>
        <h2>{productInfo? productInfo.name : 'Cargando...'}</h2>
        <p>{productInfo? productInfo.description : 'Cargando...'}</p>
        <DivButtons>
            <Button onClick={addToCarrito}>Añadir a Carrito</Button>
            <Button>Comprar Ahora</Button>
        </DivButtons>
    </StyledProducts>
  )
}

export default Product

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`	

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

const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 10px;
`