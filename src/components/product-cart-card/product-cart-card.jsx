import { useState } from "react";
import { useCart } from "../../context/cart-context";
import "./product-cart-card.css";

export const ProductCartCard = ({item}) => {
  const {price,image,categoryName,_id,qty} = item
  const { removeFromCartHandler,incrementCartHandler,decrementCartHandler } = useCart();
  const [enable,setEnable] = useState(false)
  const clickHandler = () => {
    enableHandler();
    decrementCartHandler(_id)
  }
  const clickHandlerIncrement = () =>{
    enableHandler();
    incrementCartHandler(_id)
  }
  const enableHandler = () => {
    qty === 1 ? setEnable(true) : setEnable(false)
  }

  return (
    <div className="card-items-container justify-center">
      <div className="horizontal-card-output box-shadow">
        <div className="horizontal-card">
          <div className="card-img img-center">
            <img
              className="img-responsive with-border"
              src={image}
              alt="volleyball"
            />
          </div>
          <div className="card-description-container">
            <div className="text-container text-grid">
              <h4>{categoryName}</h4>
              <p className="price-card">
                <span className="original-price">${price}</span>{" "}
                <span className="price-discount">$149</span>{" "}
                <span className="price-percantage">33%</span>
              </p>
              <div className="quantity-container">
                <label>Quantity:</label>
                <button className="outline-round-button" disabled={enable} onClick={clickHandler}>-</button>
                <input type="text" className="quantity-input-box" value={qty} />
                <button className="outline-round-button" onClick={clickHandlerIncrement}>+</button>
              </div>
            </div>
            <div className="card-button-container">
              <button
                className="button-style-none secondary-button w-100 white-color"
                onClick={() => removeFromCartHandler(_id)}
              >
                Remove From Cart
              </button>
              <button className="button-style-none outline-secondary-button w-100">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
