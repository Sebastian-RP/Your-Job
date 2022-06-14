import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/Actions";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import {useCarritoContext } from '../../Context/carritoContext'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const { user } = useAuth0();

  const [products, setProducts] = useState(null);
  const {carrito} = useCarritoContext()

  const navigate = useNavigate()
  var infoUser = null;

  const getInfo = async () => {
    infoUser = await axios.get(`http://localhost:3001/users/${user.name}`).then(res => res.data);
  }
  useEffect(() => {
    getAllProducts().then((action) => {
      dispatch(action);
    });
    setProducts(productsList);
    getInfo();
  }, []);



  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);


  return (
    <div>
        <div>
            <Button onClick={()=>navigate('/carrito')}>Carrito {carrito.length}</Button>
            <Button className={style.Button} onClick={()=> navigate('/home')}>Back</Button>
            {/* {infoUser?<p>Cargando informacion</p>:
              infoUser.premium == null ?<p>No posee servicios activos</p>:
              infoUser.premium === 1 ?<p>Usted posee un servicio premium 1</p>:
              infoUser.premium === 2 ?<p>Usted posee un servicio premium 2</p>:
              <p>Usted posee un servicio premium 3</p>
            } */}
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
