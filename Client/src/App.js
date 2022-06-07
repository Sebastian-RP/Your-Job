import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import PerfilUser from "./Pages/perfilUser/perfilUser";

function App() {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <div className="App">
            <SearchBar />
          </div>
        }
      />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/users/:user"} element={<Users />} />
      <Route path={"/perfil/user"} element={<PerfilUser/>}/>
    </Routes>
  );
}

export default App;
