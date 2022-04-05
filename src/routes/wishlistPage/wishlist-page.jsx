import { ProductCard } from "../../components";
import { useWishlist } from "../../context/wishlist-context";
import undrawImage from "../../assets/images/walking.svg";
import "./wishlistPage.css";
import { useNavigate } from "react-router-dom";

export const WishListPage = () => {
  const { wishList } = useWishlist();
  const navigate = useNavigate();
    const goToShop = () => {
        navigate("/shop")
    }
  return (
    <>
      {wishList.length === 0 ? <h1>WishList is empty!!</h1> : <h1>WishList</h1>}
      <div className="wishlist-page-container">
        {wishList.length === 0 ? (
          <img
            className="img-responsive img-wishlist"
            src={undrawImage}
            alt="Svg image"
          />
        ) : (
          wishList.map((item) => <ProductCard item={item} key={item._id} />)
        )}
        {wishList.length === 0 && (
          <button className="button-style-none solid-button" onClick={goToShop}>
            Continue Shopping
          </button>
        )}
      </div>
    </>
  );
};
