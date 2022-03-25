import "./App.css";
import Mockman from "mockman-js";
// import "mockman-js/dist/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./routes/homepage/Homepage";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

