import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/Actions";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";
import getAllPayments from "../../Components/Firebase/getAllPayments";
import { GiLaurelCrown } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

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
    <div className={style.ContainerGeneral}>
        <div className={style.TopContainer}>
            <div className={style.ButtonsContainer}>
              <Button onClick={()=>navigate('/carrito')}><FaShoppingCart /> {carrito.length}</Button>
              <Button className={style.Button} onClick={()=> navigate('/home')}>Back home</Button>
            </div>
            <div className={style.Title}>
              <h1 className={style.TitleH1}>Servicios Premium</h1>
            </div>
            <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.Products}`}>
              <p><strong>Planes activos:</strong></p>
              {plans.length > 0? plans.map(item =>{
                return <div className={style.ActivesProducts}>
                  <GiLaurelCrown className={style.Svg}></GiLaurelCrown>
                  <p>{item.items[0].price.product.name}</p>
                </div> 
              }) : <p>Cargando planes activos...</p> }
            </div>
        </div>
        <div className={style.ProductsContainer}>
          {products ? (
            products.map((e, index) => {
              return (
                <Link to={`/product/${e.id}`} className={style.Links}>
                  <div className={`bg-dark p-2 text-light bg-opacity-50 ${style.StyledProducts}`} key={index}>
                    <h3><GiLaurelCrown className={style.Svg}></GiLaurelCrown> {e.name}</h3>
                    <p>{e.description}</p>
                    <p>
                      <strong>Plan mensual de ${e.prices.unit_amount / 100} {e.prices.currency}</strong>  
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
