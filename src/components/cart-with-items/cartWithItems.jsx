import { useCart } from "../../context/cart-context";
import { CartPriceCard } from "../cart-price-card/cart-price-card";
import { ProductCartCard } from "../product-cart-card/product-cart-card";

export const CartItems = () => {
  const { cartList } = useCart();
  return (
    <div className="body-container-grid">
      <div>
        {cartList.map((item) => {
          return <ProductCartCard item={item} key={item._id} />;
        })}
      </div>
      <CartPriceCard />
    </div>
  );
};
