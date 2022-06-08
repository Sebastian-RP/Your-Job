import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/Actions";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data.payload);
    });
  }, []);
  return (
    <div>
      {products ? (
        products.map((e, index) => {
          return (
            <div key={`${e.name}_${index}`}>
              <h1>{e.description}</h1>
              <h2>{e.name}</h2>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
