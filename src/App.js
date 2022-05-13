import "./App.css";
import { Navbar } from "./components";
import { Footer } from "./components/footer/Footer";
import { Toast } from "./components/toast/toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Toast />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
