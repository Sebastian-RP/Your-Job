import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";

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
    </Routes>
  );
}

export default App;
