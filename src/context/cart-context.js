import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useToast } from "./toast-context";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const { setToastVal } = useToast();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const addToCartHandler = async (item) => {
    if (encodedToken === null) navigate("/login");
    else {
      try {
        const cartData = await axios.post(
          "/api/user/cart",
          {
            product: { ...item },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setCartList(cartData.data.cart);
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: `Added ${item.categoryName} to cart successfully.`,
          select: "success-alert",
          isDisplay: "visible",
        }));
        setTimeout(() => {
          setToastVal((prevVal) => ({
            ...prevVal,
            isDisplay: "hidden",
          }));
        }, 2000);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const removeFromCartHandler = async (_id) => {
    try {
      const removeCartData = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setCartList(removeCartData.data.cart);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Remove to cart successfully.`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementCartHandler = async (_id) => {
    try {
      const incrementCartData = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartList(incrementCartData.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const decrementCartHandler = async (_id) => {
    try {
      const decrementCartData = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartList(decrementCartData.data.cart);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCartHandler,
        removeFromCartHandler,
        incrementCartHandler,
        decrementCartHandler,
        setCartList
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
