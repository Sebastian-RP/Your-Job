import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Checkout from "./Pages/CheckOut/Checkout";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Carrito from "./Pages/Carrito/Carrito";


function App() {
  return (
    <Routes>
      <Route
        path={"/search"}
        element={
          <div className="App">
            <SearchBar />
          </div>
        }
      />
      <Route path={"/"} element={<Login />} />
      <Route path={"/users/:user"} element={<Users />} />
      <Route path={"/onboarding"} element={<Onboarding />} />
      <Route path={"/checkout/:user"} element={<Checkout />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/carrito"} element={<Carrito />} />
      <Route path={"/product/:id"} element={<Product />} />

    </Routes>
  );
}

export default App;
