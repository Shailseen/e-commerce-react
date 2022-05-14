import { useCart } from "../../context/cart-context";
import "./cart-price-card.css";
export const CartPriceCard = () => {
    const {cartList} = useCart();
    let totalPrice = 0;
    cartList.map((items) => {
        totalPrice += Number(items.price * items.qty);
    })
    const discountPrice = Math.floor(totalPrice * 0.10);
    const totalAmount = totalPrice - discountPrice;
  return (
    <div className="price-detail-container box-shadow justify-center">
      <label className="t-bold border-bottom p-b-1rm txt-align-left">Price Details</label>
      <div className="space-btw p-b-1rm">
        <label>Price ({cartList.length})</label>
        <label>{totalPrice}</label>
      </div>
      <div className="space-btw p-b-1rm">
        <label>Discount</label>
        <label className="green-color">{discountPrice}</label>
      </div>
      <div className="space-btw border-bottom p-b-1rm">
        <label>Delivery Charges</label>
        <label className="green-color">FREE</label>
      </div>
      <div className="space-btw border-bottom p-b-1rm">
        <label className="t-bold">TOTAL AMOUNT</label>
        <label className="t-bold">{totalAmount}</label>
      </div>
      <p className="green-color">You will save ₹{discountPrice} on this order</p>
      <button className="button-style-none solid-button w-100">
        PLACE ORDER
      </button>
    </div>
  );
};
