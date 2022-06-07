import React from "react";
import image from "./perfilPicture.png";
import style from "./perfil.module.css";

export default function PerfilUser() {
  return (
    <div className={style.containerPerfil}>
      <div className={style.header}>
        <div className={style.picture}>
          <img src={image} alt="perfil-picture" />
          <h2>Jose Gregorio Sarabia</h2>
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
