import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/Actions";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";
import getAllPayments from "../../Components/Firebase/getAllPayments";
import { clearCarrito } from "../../Redux/Actions/Actions";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const { user } = useAuth0();

  const [products, setProducts] = useState(null);
  const [plans, setPlans] = useState([]);
  const carrito = useSelector((state)=> state.carrito)

  const navigate = useNavigate()

  const awaitLogin = async () => {  
    setPlans(await getAllPayments(user))
  }

  useEffect(() => {
    getAllProducts().then((action) => {
      dispatch(action);
    });
    setProducts(productsList);
    awaitLogin()
  }, []);

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  return (
    <div>
        <div>
            <Button onClick={()=>navigate('/carrito')}>Carrito {carrito.length}</Button>
            <Button className={style.Button} onClick={()=> navigate('/home')}>Back home</Button>
            <h2>Actualmente posee los siguientes planes activos:</h2>
            {plans.length > 0? plans.map(item =>{
              return <div>
                <p>{item.items[0].price.product.name}</p>
              </div> 
            }) : <p>Cargando planes activos...</p> }
        </div>
        <h1>Servicios premium</h1>
      {products ? (
        products.map((e, index) => {
          return (
            <Link to={`/product/${e.id}`} className={style.Links}>
              <div className={style.StyledProducts} key={index}>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <p>
                  Plan mensual de ${e.prices.unit_amount / 100} {e.prices.currency} 
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
