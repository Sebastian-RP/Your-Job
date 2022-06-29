import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import getAllPayments from "../../Components/Firebase/getAllPayments";
import { GiLaurelCrown } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";


const Products = () => {
  const productsList = useSelector((state) => state.products);
  const { user } = useAuth0()
  const [products, setProducts] = useState(null);
  const [plans, setPlans] = useState([]);
  const carrito = useSelector((state)=> state.carrito)
  const navigate = useNavigate()

  var UserPlans = []

  const awaitLogin = async () => {
    UserPlans = await getAllPayments(user);
    if(UserPlans.length > 0 ) setPlans(UserPlans)
    if(UserPlans.length === 0) setPlans(["Does not have active plans"])
    if(UserPlans.includes("error")) setPlans(["To see your plans you must log in"])
  }

  useEffect(() => {
    setProducts(productsList);
    awaitLogin()
  }, []);

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  return (
    <div className={style.ContainerGeneral}>
        <div className={style.TopContainer}>
            <div className={style.ButtonsContainer}>
              <Button onClick={()=>navigate('/carrito')}><FaShoppingCart /> {carrito.length}</Button>
              <Button className={style.Button} onClick={()=> navigate('/home')}>Back home</Button>
            </div>
            <div className={style.Title}>
              <Title2>Premium services</Title2>
            </div>
            <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.Products}`}>
              <p><strong>Active plans:</strong></p>
              {plans.length > 0? plans.map(item =>{
                return <div className={style.ActivesProducts}>
                  {item.hasOwnProperty("items")? <GiLaurelCrown className={style.Svg}></GiLaurelCrown> : null} 
                  {item.hasOwnProperty("items")? <p>{item.items[0].price.product.name}</p> :<p>{item}</p>}
                </div> 
              }) : <p>Loading active plans...</p> }
              {plans.length > 0? plans.map(item =>{
                return <div className={style.ActivesProducts}>
                  {item.hasOwnProperty("items")? item.items.length > 1 ?
                    <>
                      <GiLaurelCrown className={style.Svg}></GiLaurelCrown>
                      <p>{item.items[1].price.product.name}</p>
                    </>
                  : null : null}
                  </div> 
              }) : null }
            </div>
        </div>
        <div className={style.ProductsContainer}>
          {products ? (
            products.map((e, index) => {
              return (
                <Link to={`/product/${e.id}`} className={style.Links}>
                  <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.StyledProducts}`} key={index}>
                    <h1><GiLaurelCrown className={style.Svg}></GiLaurelCrown> {e.name}</h1>
                    <p>{e.description}</p>
                    <p>
                      <strong>Monthly plan of ${e.prices.unit_amount / 100} {e.prices.currency}</strong>  
                    </p>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
    </div>
  );
};

export default Products;


const Button = styled.button`
  background-color: #1C5D99;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  padding: 7px 10px 7px 10px ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }
`;


const Title2 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #dddddd;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;