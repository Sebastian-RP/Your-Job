import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../Components/Firebase/credenciales'
import {doc, collection, getDoc, getDocs} from 'firebase/firestore'
import { useCarritoContext } from '../../Context/carritoContext'
import style from "./Product.module.css";


async function getProduct(id){
    const colectionRef = collection(db, 'products')
    const docRef = doc(colectionRef, id)
    const snapDoc = await getDoc(docRef)
    const product = snapDoc.data()

    const priceSnaps = await getDocs(collection(snapDoc.ref, "prices"));
    product.prices = priceSnaps.docs[0].data();
    product.priceId = priceSnaps.docs[0].id;

    return product
}

const Product = () => {
    const [productInfo, setProductInfo] = useState(null)
    const id = useParams().id

    const {carrito, setCarrito} = useCarritoContext()

    const navigate = useNavigate()

    useEffect(() => {
        getProduct(id).then(function (product) {
                setProductInfo(product)
            })
    }, [id])

    const addToCarrito = () => {
        if(carrito){
            if(carrito.name === productInfo.name){
                alert("El elemento ya se encuentra en el carrito")
            } else{
                alert("Elemento añadido al carrito de compras")
                console.log([...new Set([...carrito, productInfo])])
                setCarrito([...new Set([...carrito, productInfo])])
            }
        }
    }

  return (
    <div className={style.StyledProducts} >
        <button className={style.Button} onClick={()=> navigate('/products')}>Back</button>
        <h1>Detalles del Producto ID: {id}</h1>
        <h2>{productInfo? productInfo.name : 'Cargando...'}</h2>
        <p>{productInfo? productInfo.description : 'Cargando...'}</p>
        <div className={style.DivButtons} >
            <button className={style.Button} onClick={addToCarrito} disabled={!productInfo}>Añadir a Carrito</button>
            <button className={style.Button}>Comprar Ahora</button>
        </div>
    </div>
  )
}

export default Product

