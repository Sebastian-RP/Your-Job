import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";

function inputHandler(e, setUsersFiltered, users, setSelected) {
  let inputValue = e.target.value;
  setSelected(-1);
  if (inputValue.length === 0) {
    setUsersFiltered([]);
  } else {
    setUsersFiltered(
      users.filter((user) => {
        return new RegExp(inputValue.toLowerCase()).test(user.toLowerCase());
      })
    );
  }
}

function focusOut(setUsersFiltered) {
  setUsersFiltered([]);
}

function keyDownHandler(e, setSelected, selected, usersFiltered) {
  if (e.code === "ArrowDown") {
    if (selected + 1 >= usersFiltered.length) {
      setSelected(0);
    } else {
      setSelected(selected + 1 <= usersFiltered.length - 1 ? selected + 1 : selected);
    }
  } else if (e.code === "ArrowUp") {
    if (selected - 1 < 0) {
      setSelected(usersFiltered.length - 1);
    } else {
      setSelected(selected - 1 >= 0 ? selected - 1 : selected);
    }
  }
}
function submitHandler(e, userSelected, navigate) {
  e.preventDefault();
  let inputTextValue = e.target[0].value;
  navigate(`/users/${userSelected ? userSelected : inputTextValue}`);
}

export default function SearchBar() {
  const [users] = useState(["Jose Samuel", "Sebas 1", "Sebas 2"]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [selected, setSelected] = useState(-1);
  const navigate = useNavigate();

  return (
    <form className={style.form} onSubmit={(e) => submitHandler(e, usersFiltered[selected], navigate)}>
      <div className={style.container}>
        <input
          onChange={(e) => inputHandler(e, setUsersFiltered, users, setSelected)}
          onBlur={() => focusOut(setUsersFiltered)}
          onFocus={(e) => inputHandler(e, setUsersFiltered, users, setSelected)}
          onKeyDown={(e) => keyDownHandler(e, setSelected, selected, usersFiltered)}
          className={style.input}
          type="text"
          name=""
          id=""
          placeholder={"Type the name of the user or company"}
        />
        <button className={style.button}>
          <i className={"fa-solid fa-magnifying-glass " + style.button__glass}></i>
        </button>
      </div>
      {usersFiltered.length > 0 ? (
        <ul className={style.suggestion__container}>
          {usersFiltered.map((user, index) => {
            return (
              <li key={user + "_" + index} className={`${style.suggestion__item} ${selected === index ? style.suggestion__itemSelected : ""}`}>
                {user}
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
