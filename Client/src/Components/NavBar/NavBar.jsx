import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';
import { Button } from 'react-bootstrap';

export default function Navbar() {

    return (
        <div className={style.containerNavbar}>
            <h1>YourJob</h1>
            <SearchBar />
            <Button variant="danger">LogOut</Button>
        </div>
    )
}