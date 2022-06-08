import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../Redux/Actions/Actions'


const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
    <div>{products? products.map(e =>{
        return(
            <div>
                <h1>{e.description}</h1>
                <h2>{e.name}</h2>
            </div>
        )
    }):<p>Loading...</p>}</div>
  )
}

export default Products