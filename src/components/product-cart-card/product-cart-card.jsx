import { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./product-cart-card.css";

export const ProductCartCard = ({ item }) => {
  const { price, image, categoryName, _id, qty } = item;
  const {
    wishList,
    removeWishListHandler,
    addToWishListHandler,
  } = useWishlist();
  const {
    removeFromCartHandler,
    incrementCartHandler,
    decrementCartHandler,
  } = useCart();
  const [incrementEnable, setIncrementEnable] = useState(true);
  const [decrementEnable,setDecrementEnable] = useState(false);
  useEffect(() => {
    incrementEnable ? setIncrementEnable(prev => !prev) : setDecrementEnable(prev => !prev);
    if(qty===1)
    {
      console.log("if...")
      setDecrementEnable(true)
    }
    else if(qty>1)
    {
      console.log("else...")
      setDecrementEnable(false)
    }
  },[item])
  const clickHandler = () => {
    setDecrementEnable(prev => !prev)
    decrementCartHandler(_id);
    enableHandler();
  };
  const clickHandlerIncrement = () => {
    setIncrementEnable(prev => !prev)
    incrementCartHandler(_id);
    enableHandler();
  };
  const enableHandler = () => {
  };

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
                <button
                  className="outline-round-button"
                  disabled={decrementEnable}
                  onClick={clickHandler}
                >
                  -
                </button>
                <input type="text" className="quantity-input-box" value={qty} />
                <button
                  className="outline-round-button"
                  onClick={clickHandlerIncrement}
                  disabled={incrementEnable}
                >
                  +
                </button>
              </div>
            </div>
            <div className="card-button-container">
              <button
                className="button-style-none secondary-button w-100 white-color"
                onClick={() => removeFromCartHandler(_id)}
              >
                Remove From Cart
              </button>
              {wishList.some((it) => it._id === item._id) ? (
                <button
                  onClick={() => removeWishListHandler(item)}
                  className="button-style-none outline-secondary-button w-100"
                >
                  Remove From Wishlist
                </button>
              ) : (
                <button
                  onClick={() => addToWishListHandler(item)}
                  className="button-style-none outline-secondary-button w-100"
                >
                  Move to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
