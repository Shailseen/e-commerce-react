import { useEffect } from "react";
import { CartPriceCard } from "../../components/cart-price-card/cart-price-card";
import { CartItems } from "../../components/cart-with-items/cartWithItems";
import { EmptyCart } from "../../components/empty-cart/emptyCart";
import { ProductCartCard } from "../../components/product-cart-card/product-cart-card";
import { useCart } from "../../context/cart-context";
import "./cartpage.css";
export const CartPage = () => {
  const { cartList } = useCart();
  const cartLength = cartList.length;
  return (
      <>
      {cartLength === 0 ? <EmptyCart/> : <CartItems/>}
      </>
  );
};
