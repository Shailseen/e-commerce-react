import emptyCartImage from "../../assets/images/cartpage.jpg";
import "./emptyCart.css";
import { useNavigate } from "react-router-dom";
export const EmptyCart = () => {
    const navigate = useNavigate();
    const goToShop = () => {
        navigate("/shop")
    }
  return (
    <div className="cart-empty-container">
      <img className="cart-img" src={emptyCartImage} alt="" />
      <h2>Unfortunately, Your Cart Is Empty </h2>
      <p className="cart-text">Please add something in your cart</p>
      <button
            className="button-style-none solid-button"
            onClick={goToShop}
          >
            Continue Shopping
          </button>
    </div>
  );
};
