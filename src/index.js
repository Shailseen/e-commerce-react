import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./context/product-context";
import { AuthProvider } from "./context/auth-context";
import { ToastProvider } from "./context/toast-context";
import { CartProvider } from "./context/cart-context";
import { WishListProvider } from "./context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <WishListProvider>
        <CartProvider>
          <AuthProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </AuthProvider>
        </CartProvider>
      </WishListProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
