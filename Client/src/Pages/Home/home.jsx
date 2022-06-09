import Navbar from "../../Components/NavBar/NavBar";
import style from './home.module.css';
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {

    const {logout, user, isAuthenticated, isLoading } = useAuth0();
    

   
        if(isLoading) {
            return (
            <div>LOADING...</div>
            )
        }
    

    return (
        <div className={style.containerHome}>
            {isAuthenticated?<>
            <Navbar />
            <div>
            <div>
                <img src={user.picture} alt="picture" />
            </div>
            <h1>Soy el home</h1>
            </div>
            </>:logout({returnTo: window.location.origin})}
        </div>
    )
}