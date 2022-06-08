import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Checkout from "./Pages/CheckOut/Checkout";
import Products from "./Pages/Products/Products";
import RegisterUser from "./Components/register/RegisterUser";
import RegisterCompany from "./Components/register/RegisterCompany";

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
      <Route path={"/register/user"} element={<RegisterUser />} />
      <Route path={"/register/company"} element={<RegisterCompany />} />
      <Route path={"/checkout/:user"} element={<Checkout />} />
      <Route path={"/products"} element={<Products />} />
    </Routes>
  );
}

export default App;
