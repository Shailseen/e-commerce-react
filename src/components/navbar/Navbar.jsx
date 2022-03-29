import { useAuth } from "../../context/auth-context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-container box-shadow">
      <div className="navbar">
        <div className="brand-name">
          <a className="text-style-none font-lg">
            <h4>smasher</h4>
          </a>
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
            <button className="button-style-none solid-button">Login</button>
          </Link>

          <div className="icon-label-container">
            <a>
              <i className="far fa-heart"></i>
            </a>
            <div className="badge badge-icon-card">6</div>
          </div>

          <div className="icon-label-container">
            <a>
              <i className="far fa-shopping-bag"></i>
            </a>
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
        <button>
          <i className="fal fa-search searchbar-style"></i>
        </button>
      </div>
    </nav>
  );
};
export { Navbar };
