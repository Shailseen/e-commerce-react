import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import "./productCard.css";
const ProductCard = ({ item }) => {
  const { addToCartHandler, cartList } = useCart();
  const {
    removeWishListHandler,
    addToWishListHandler,
    wishList,
  } = useWishlist();
  let navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  let ratingStar = [];
  for (let i = 1; i <= item.rating; i++)
    ratingStar.push(<i className="fas rating-star-color fa-star"></i>);
  return (
    <div
      style={item.includeStock === false ? { opacity: 0.3 } : { opacity: 1 }}
      className="card-vertical box-shadow"
      key={item._id}
    >
      <div className="card-img img-center">
        <img
          className="img-responsive with-border"
          src={item.image}
          alt="product"
        />

        <div className="badge-card">
          {wishList.some((it) => it._id === item._id) ? (
            <i
              onClick={() => removeWishListHandler(item)}
              className="fas fa-heart color-heart"
            ></i>
          ) : (
            <i
              onClick={() => addToWishListHandler(item)}
              className="fas fa-heart"
            ></i>
          )}
        </div>
      </div>
      <div className="text-container">
        <h4>{item.title}</h4>
        <div className="small-label m-2r">{item.categoryName}</div>
        <div className="inline-display"></div>
        <p className="price-card">
          <span className="original-price">${item.price}</span>{" "}
          <span className="price-discount">$149</span>{" "}
          <span className="price-percantage">33%</span>
        </p>
      </div>
      <div>{ratingStar}</div>
      <div className="card-button-container pd-none mr-05rm">
        {cartList.some((it) => it._id === item._id) ? (
          <button
            className="button-style-none solid-button w-100"
            onClick={goToCart}
          >
            Go to Cart
          </button>
        ) : (
          <button
            disabled={!item.includeStock}
            className={`button-style-none solid-button w-100 ${item.includeStock}`}
            onClick={() => addToCartHandler(item)}
          >
            <i className="fas fa-cart-plus"></i> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
