import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";

import axios from "axios";

import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  // const products = useSelector((state) => state);
  // console.log(products);

  const dispatch = useDispatch();

  // Calling the API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(response);
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products:", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
