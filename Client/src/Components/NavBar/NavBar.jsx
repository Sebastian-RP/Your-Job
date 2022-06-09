import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../../Context/carritoContext";

export default function Navbar() {
    const { logout } = useAuth0();
    const navigate = useNavigate()
    const {carrito} = useCarritoContext()

    return (
        <div className={style.containerNavbar}>
            <h1>YourJob</h1>
            <SearchBar />
            <Button variant="danger" 
            onClick={() => logout({returnTo: window.location.origin})}
            >LogOut</Button>
            <div>
                <button onClick={ () => navigate('/carrito')}>Carrito {carrito.length}</button>
                <button onClick={ () => navigate('/products')}>Premium</button>
            </div>
        </div>
    )
}