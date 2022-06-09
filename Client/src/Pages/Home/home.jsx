import Navbar from "../../Components/NavBar/NavBar";
import style from './home.module.css';


export default function Home() {
    return (
        <div className={style.containerHome}>
            <Navbar />
            <div>

            <h1>Soy el home</h1>
            </div>
        </div>
    )
}