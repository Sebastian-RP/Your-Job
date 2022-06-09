import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Redux/Stores/Store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { CarritoContextProvider } from "./Context/carritoContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <Router>
        <React.StrictMode>
            <CarritoContextProvider>
                <Auth0Provider
                  domain="dev-zgaxo6rs.us.auth0.com"
                  clientId="CnkPocpsrnIuXCzhYT0WpiyU8LxsBx5J"
                  redirectUri="http://localhost:3000/home"
                >
                  <App />
                </Auth0Provider>
            </CarritoContextProvider>
        </React.StrictMode>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
