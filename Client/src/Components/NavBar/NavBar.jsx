import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const { logout } = useAuth0();
    const navigate = useNavigate()
    const carrito = useSelector((state)=> state.carrito)

    return (
        <div className={style.containerNavbar}>
            <h1>YourJob</h1>
            <SearchBar />
            <div>
                <Button variant="success" onClick={ () => navigate('/carrito')}>Carrito {carrito.length}</Button>
                <Button variant="success" onClick={ () => navigate('/products')}>Premium</Button>
            <Button variant="danger" 
            onClick={() => logout({returnTo: window.location.origin})}
            >LogOut</Button>
            </div>
        </div>
    )
}