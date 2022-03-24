import "./navbar.css";
const Navbar = () => {
    return(
    <nav className="navbar-container box-shadow">
    <div className="navbar">
      <div className="brand-name">
        <a className="text-style-none font-lg" href="/pages/homepage/homepage.html"
          ><h4>smasher</h4></a
        >
      </div>
      <div className="searchbar">
        <input
          className="inputbox-style"
          type="text"
          placeholder="Search item..."
        />
        <button><i className="fal fa-search searchbar-style"></i></button>
      </div>
      <div className="cta-button">
        <button className="button-style-none solid-button" onClick="location.href='/pages/homepage/login-page.html'">Login</button>

        <div className="icon-label-container">
          <a href="/pages/homepage/wishlist-page.html"><i className="far fa-heart"></i></a>
          <div className="badge badge-icon-card">6</div>
        </div>

        <div className="icon-label-container">
          <a href="/pages/homepage/cart-page.html"><i className="far fa-shopping-bag"></i></a>
          <div className="badge badge-icon-card">6</div>
        </div>
      </div>
    </div>
      <div className="searchbar searchbar-mobile-view">
        <input
          className="inputbox-style"
          type="text"
          placeholder="Search item..."
        />
        <button><i className="fal fa-search searchbar-style"></i></button>
      </div>
    </nav>
    )
}
export {Navbar}