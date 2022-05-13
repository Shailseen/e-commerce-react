import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  ProductProvider,
  AuthProvider,
  ToastProvider,
  CartProvider,
  WishListProvider,
} from "./context/index";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Homepage } from "./routes/homepage/Homepage";
import { ProductPage } from "./routes/productpage/ProductPage";
import { LoginPage } from "./routes/loginpage/loginpage";
import { CartPage } from "./routes/cartpage/cartpage";
import { WishListPage } from "./routes/wishlistPage/wishlist-page";
// import MockmanEs from "mockman-js";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <WishListProvider>
          <CartProvider>
            <AuthProvider>
              <ProductProvider>
                <Routes>
                  <Route path="/" element={<App />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/shop" element={<ProductPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishListPage />} />
                  </Route>
                </Routes>
              </ProductProvider>
            </AuthProvider>
          </CartProvider>
        </WishListProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
