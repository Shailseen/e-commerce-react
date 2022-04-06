import { createContext, useContext, useState } from "react";
import { useToast } from "./toast-context";
import axios from "axios";

const WishListContext = createContext();

const useWishlist = () => useContext(WishListContext);

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const { setToastVal } = useToast();
  const encodedToken = localStorage.getItem("token");

  const addToWishListHandler = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: { ...item },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setWishList(response.data.wishlist);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Added ${item.categoryName} to wishlist successfully.`,
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
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Failed to add ${item.categoryName} to wishlist.`,
        select: "error-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    }
}


    const removeWishListHandler = async (item) => {
        try {
          const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: {
              authorization: encodedToken,
            },
          });
          setWishList(response.data.wishlist);
          setToastVal((prevVal) => ({
            ...prevVal,
            msg: `Remove ${item.categoryName} to wishlist successfully.`,
            select: "success-alert",
            isDisplay: "visible",
          }));
          setTimeout(() => {
            setToastVal((prevVal) => ({
              ...prevVal,
              isDisplay: "hidden",
            }));
          }, 2000);
        }catch(error){
          setToastVal((prevVal) => ({
            ...prevVal,
            msg: `Failt to remove ${item.categoryName} from wishlist.`,
            select: "error-alert",
            isDisplay: "visible",
          }));
          setTimeout(() => {
            setToastVal((prevVal) => ({
              ...prevVal,
              isDisplay: "hidden",
            }));
          }, 2000);
        }
  };
  return (
    <WishListContext.Provider
      value={{
        addToWishListHandler,
        removeWishListHandler,
        wishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export { useWishlist, WishListProvider };
