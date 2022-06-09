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
      {products ? (
        products.map((e) => {
          return (
            <Link to={`/product/${e.id}`}>
              <div className={style.StyledProducts}>
                <h1>{e.name}</h1>
                <h2>{e.description}</h2>
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
