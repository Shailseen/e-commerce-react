import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/api/products`);
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productList}}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, useProduct };
