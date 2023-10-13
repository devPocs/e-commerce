import React, { useState, createContext, useEffect } from "react";

//create the product context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //set the products state
  const [products, setProducts] = useState([]);

  //fetch the products.
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https:fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
