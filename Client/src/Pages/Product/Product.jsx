import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../Components/Firebase/credenciales'
import {doc, collection, getDoc, getDocs} from 'firebase/firestore'
import style from "./Product.module.css";
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
                swal ( "Oops" ,  "The item is already in the cart" ,  "error" )
            } else{
                swal ( "Ready!", "Item added to shopping cart" ,  "success" )
                addCarrito([...new Set([...carrito, productInfo])]).then((action) => {
                    dispatch(action);
                  });
            }
        }   
    }

  return (
        <div className={style.StyledProducts} >
            <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.ProductContainer}`}>
                <button className={style.Button} onClick={()=> navigate('/products')}>Back</button>
                <h1>{productInfo? productInfo.name : 'Loading...'}</h1>
                <h2>Product Details: </h2>
                <p>{productInfo? productInfo.description : 'Loading...'}</p>
                <p>If you have already purchased this product, write to us to know your opinion about it, and so we can reach more people.</p>
                <div className={style.DivButtons} >
                    <button className={style.Button} onClick={addToCarrito} disabled={!productInfo}><FaShoppingCart/> | Add</button>
                </div>
            </div>
        </div>  
  )
}

export default Product

