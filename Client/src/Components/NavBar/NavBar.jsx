import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const { logout } = useAuth0();

    return (
        <div className={style.containerNavbar}>
            <h1>YourJob</h1>
            <SearchBar />
            <Button variant="danger" 
            onClick={() => logout({returnTo: window.location.origin})}
            >LogOut</Button>
        </div>
    )
}