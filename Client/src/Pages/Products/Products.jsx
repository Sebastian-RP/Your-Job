import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../Redux/Actions/Actions'
import styled from 'styled-components'
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
                <StyledProducts>
                    <h1>{e.name}</h1>
                    <h2>{e.description}</h2>
                    <p>${e.prices.unit_amount /100} {e.prices.currency}</p>
                </StyledProducts>
            </Link>
        )
    }):<p>Loading...</p>}</div>
  )
}

export default Products

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

`