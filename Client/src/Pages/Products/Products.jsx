import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/Actions";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import {useCarritoContext } from '../../Context/carritoContext'
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);

  const [products, setProducts] = useState(null);
  const {carrito} = useCarritoContext()

  const navigate = useNavigate()

  useEffect(() => {
    getAllProducts().then((action) => {
      dispatch(action);
    });
    setProducts(productsList);
  }, []);

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  return (
    <div>
        <div>
            <button onClick={()=>navigate('/carrito')}>Carrito {carrito.length}</button>
            <button className={style.Button} onClick={()=> navigate('/home')}>Back</button>
        </div>
        <h1>Servicios premium</h1>
      {products ? (
        products.map((e, index) => {
          return (
            <Link to={`/product/${e.id}`}>
              <div className={style.StyledProducts} key={index}>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <p>
                  ${e.prices.unit_amount / 100} {e.prices.currency}
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
