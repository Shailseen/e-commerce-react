import { useContext, useReducer } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { reducer } from "../reducer/filter-reducer";
import axios from "axios";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const [state, dispatch] = useReducer(reducer, {
    sortBy: "POPULARITY",
    includeOutOfStock: false,
    volleyBall: false,
    basketBall: false,
    tennisBall: false,
    baseBall: false,
    soccerBall: false,
    golfBall: false,
    sliderRating: 5,
    sliderPrice: 7000,
  });

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
    <ProductContext.Provider value={{ productList, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, useProduct };
