import { Link } from "react-router-dom";
import "./navbar.css";
import { useCart,useWislist } from "../../context/index";
const Navbar = () => {
  const {cartList} = useCart()
  const {wishList} = useWishlist()
  const cartLength = cartList.length;
  const encodedToken = localStorage.getItem("token");
  return (
    <nav className="navbar-container box-shadow">
      <div className="navbar">
        <div className="brand-name">
          <Link to="/" className="text-style-none font-lg">
            <h4>smasher</h4>
          </Link>
        </div>
        <div className="searchbar">
          <input
            className="inputbox-style"
            type="text"
            placeholder="Search item..."
          />
          <button>
            <i className="fal fa-search searchbar-style"></i>
          </button>
        </div>
        <div className="cta-button">
          <Link to="/login">
            {encodedToken === null ? <button className="button-style-none solid-button">Login</button> : <button className="button-style-none solid-button">Logout</button>}
          </Link>

          <div className="icon-label-container">
            <Link to="/wishList">
              <i className="far fa-heart"></i>
            </Link>
            {wishList.length !== 0 && <div className="badge badge-icon-card">{wishList.length}</div>}
          </div>

          <div className="icon-label-container">
            <Link to="/cart">
              <i className="far fa-shopping-bag"></i>
            </Link>
            {cartLength !== 0 && <div className="badge badge-icon-card">{cartLength}</div>}
          </div>
        </div>
      </div>
      <div className="searchbar searchbar-mobile-view">
        <input
          className="inputbox-style"
          type="text"
          placeholder="Search item..."
        />
        <button>
          <i className="fal fa-search searchbar-style"></i>
        </button>
      </div>
    </nav>
  );
};
export { Navbar };
