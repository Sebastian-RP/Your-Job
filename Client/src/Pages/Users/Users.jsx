import React from "react";
import image from "./perfilPicture.png";
import style from "./perfil.module.css";
import { useParams, Link } from "react-router-dom";

export default function Users() {
  const { user } = useParams();
  return (
    
      
      <div className={style.containerPerfil}>
      <div className={style.header}>
        <div className={style.picture}>
          <img src={image} alt="perfil-picture" />
          <h2>{user}</h2>
        <Link to={"/"}>Go to home</Link>
        </div>
      </div>
      <div className={style.suggestions}>
          <h2>Suggestions</h2>
      </div>
      <div className={style.perfilInfo}>
          <div className={style.about}>
            <h2>About</h2>
          </div>
          <div className={style.info}>
            <h2>info</h2>

          </div>
      </div>
    </div>

      
  
  );
}
