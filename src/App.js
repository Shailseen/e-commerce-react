import "./App.css";
import Mockman from "mockman-js";
// import "mockman-js/dist/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./routes/homepage/Homepage";
import { Footer } from "./components/footer/Footer";
import { ProductPage } from "./routes/productpage/ProductPage";
import { LoginPage } from "./routes/loginpage/loginpage";
import { Toast } from "./components/toast/toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toast />
          <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
