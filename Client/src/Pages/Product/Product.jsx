import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../Components/Firebase/credenciales'
import {doc, collection, getDoc, getDocs} from 'firebase/firestore'
import style from "./Product.module.css";
import Button from 'react-bootstrap/Button'
import { addCarrito } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import swal from 'sweetalert';
    
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

    const dispatch = useDispatch()
    const carrito = useSelector((state)=> state.carrito)

    const navigate = useNavigate()

    useEffect(() => {
        getProduct(id).then(function (product) {
                setProductInfo(product)
            })
    }, [id])

    const addToCarrito = () => {
        if(carrito){
            let repetido = carrito.filter(e => e.name == productInfo.name)
            if(repetido.length > 0){
                swal ( "Oops" ,  "El elemento ya se encuentra en el carrito" ,  "error" )
            } else{
                swal ( "Listo!", "Elemento añadido al carrito de compras" ,  "success" )
                addCarrito([...new Set([...carrito, productInfo])]).then((action) => {
                    dispatch(action);
                  });
            }
        }   
    }

  return (
        <div className={style.StyledProducts} >
            <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.ProductContainer}`}>
                <Button className={style.Button} onClick={()=> navigate('/products')}>Back</Button>
                <h1>{productInfo? productInfo.name : 'Cargando...'}</h1>
                <h2>Detalles del Producto ID: {id}</h2>
                <p>{productInfo? productInfo.description : 'Cargando...'}</p>
                <div className={style.DivButtons} >
                    <Button className={style.Button} onClick={addToCarrito} disabled={!productInfo}><FaShoppingCart/> Añadir</Button>
                </div>
            </div>
        </div>  
  )
}

export default Product

