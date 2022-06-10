import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBar.module.css";

function inputHandler(e, setUsersFiltered, users, setSelected, setFocus) {
  let inputValue = e.target.value;
  setSelected(-1);
  setFocus(true);
  if (inputValue.length === 0) {
    setUsersFiltered([]);
  } else {
    setUsersFiltered(
      users.filter((user) => {
        return new RegExp(`^${inputValue.toLowerCase()}`).test(user.toLowerCase());
      })
    );
  }
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
  let inputTextValue = e.target[0]?.value || e.target.innerText;
  if (inputTextValue.length > 0) {
    navigate(`/users/${userSelected ? userSelected : inputTextValue}`);
  }
}

export default function SearchBar() {
  let usersList = useSelector((state) => state.users);
  usersList = usersList.map((user) => user.name);
  const [users, setUsers] = useState(usersList);
  if (users.length < usersList.length) {
    setUsers(usersList);
  }
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  window.onclick = (e) => {
    if (!e.target.className.split("_").includes("SearchBar")) {
      setFocus(false);
    }
  };
  useEffect(() => {
    getAllUsers().then((data) => dispatch(data));
    // eslint-disable-next-line
  }, []);
  const [selected, setSelected] = useState(-1);
  const navigate = useNavigate();

  return (
    <form className={style.form} onSubmit={(e) => submitHandler(e, usersFiltered[selected], navigate)}>
      <div className={style.container}>
        <input
          onChange={(e) => inputHandler(e, setUsersFiltered, users, setSelected, setFocus)}
          onFocus={(e) => inputHandler(e, setUsersFiltered, users, setSelected, setFocus)}
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
      {usersFiltered.length > 0 && focus ? (
        <ul className={style.suggestion__container}>
          {usersFiltered.map((user, index) => {
            return index <= 4 ? (
              <li
                key={user + "_" + index}
                onClick={(e) => submitHandler(e, usersFiltered[selected], navigate)}
                className={`${style.suggestion__item} ${selected === index ? style.suggestion__itemSelected : ""}`}
              >
                {user}
              </li>
            ) : null;
          })}
        </ul>
      ) : null}
    </form>
  );
}
