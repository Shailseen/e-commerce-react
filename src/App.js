import "./App.css";
import Mockman from "mockman-js";
// import "mockman-js/dist/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./routes/homepage/Homepage";
import { Footer } from "./components/footer/Footer";
import { Filter } from "./components/filter/Filter";
import { ProductPage } from "./routes/productpage/ProductPage";
import { ProductProvider } from "./context/product-context";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
