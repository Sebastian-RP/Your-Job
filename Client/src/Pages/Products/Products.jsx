import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../Redux/Actions/Actions'
import style from "./Products.module.css";
import {Link} from 'react-router-dom'


const Products = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products)

    const [products, setProducts] = useState(null)

    useEffect(() => {
        getAllProducts().then((action) => {
            dispatch(action);
        });
        setProducts(productsList)
    }, [])

    useEffect(() => {
        setProducts(productsList)
    }, [productsList])


    return (
    <div>{products? products.map(e =>{
        return(
            <Link to={`/product/${e.id}`}>
                <div className={style.StyledProducts} >
                    <h1>{e.name}</h1>
                    <h2>{e.description}</h2>
                    <p>${e.prices.unit_amount /100} {e.prices.currency}</p>
                </div>
            </Link>
        )
    }):<p>Loading...</p>}</div>
  )
}

export default Products

