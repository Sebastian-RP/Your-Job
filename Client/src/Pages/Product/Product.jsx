import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../Components/Firebase/credenciales'
import {doc, collection, getDoc} from 'firebase/firestore'
import { useCarritoContext } from '../../Context/carritoContext'
import style from "./Product.module.css";


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
    <div className={style.StyledProducts} >
        <button className={style.Button} onClick={()=> navigate('/products')}>Back</button>
        <h1>Detalles del Producto ID: {id}</h1>
        <h2>{productInfo? productInfo.name : 'Cargando...'}</h2>
        <p>{productInfo? productInfo.description : 'Cargando...'}</p>
        <div className={style.DivButtons} >
            <button className={style.Button} onClick={addToCarrito}>Añadir a Carrito</button>
            <button className={style.Button}>Comprar Ahora</button>
        </div>
    </div>
  )
}

export default Product

