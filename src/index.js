import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import{ ProductProvider,AuthProvider,ToastProvider,CartProvider,WishListProvider} from "./context/index"


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
