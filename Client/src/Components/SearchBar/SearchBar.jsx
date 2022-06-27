import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, getUserInfo, getCompanyInfo } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
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
        return new RegExp(`^${inputValue.toLowerCase()}`).test(
          user.toLowerCase()
        );
      })
    );
  }
}

function keyDownHandler(e, setSelected, selected, usersFiltered) {
  if (e.code === "ArrowDown") {
    if (selected + 1 >= usersFiltered.length) {
      setSelected(0);
    } else {
      setSelected(
        selected + 1 <= usersFiltered.length - 1 ? selected + 1 : selected
      );
    }
  } else if (e.code === "ArrowUp") {
    if (selected - 1 < 0) {
      setSelected(usersFiltered.length - 1);
    } else {
      setSelected(selected - 1 >= 0 ? selected - 1 : selected);
    }
  }
}

export default function SearchBar() {
  let onlyUsers = useSelector((state) => state.users);
  let userNameList = onlyUsers.map((user) => user.name);
  let onlyCompanies = useSelector((state) => state.companies);
  let companyNameList = onlyCompanies.map((comp) => comp.name);
  let [usersList, setUsersList] = useState([]);

  const [users, setUsers] = useState(usersList);//usuarios a filtrar
  if (users.length < usersList.length) {
    setUsers(usersList);
  }

  const [usersFiltered, setUsersFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const [nameUser, setNameUser] = useState(""); //estado que contendra el texto de la barra de busqueda
  const [filterSearch ,setFilterSearchBar] = useState("all");
  const dispatch = useDispatch();

  window.onclick = (e) => {
    if (!e.target.className.split("_").includes("SearchBar")) {
      setFocus(false);
    }
  };

  function submitHandler(e, userSelected, navigate, nameUsers, nameUser) {
    e.preventDefault();
    if (nameUsers.includes(nameUser)) {
      if (companyNameList.includes(nameUser)) {
        navigate(`/company/${userSelected ? userSelected : nameUser}`);
        getCompanyInfo(nameUser).then((action) => {
          dispatch(action);
        });
        setNameUser("");
      }if(userNameList.includes(nameUser)){
        navigate(`/users/${userSelected ? userSelected : nameUser}`);
        getUserInfo(nameUser).then((action) => {
          dispatch(action);
        });
        setNameUser("");
      }
    } else {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'User not found!',
      })
    }
    console.log("nombre usuarios");
    console.log(nameUsers);
  }

  const handleSelectChange = (e) => {
    if (e.target.value === "all") {
      setFilterSearchBar("all")
      setUsersList([...userNameList, ...companyNameList]);
    }
    if(e.target.value === "users"){
      setFilterSearchBar("users")
      setUsersList(userNameList);
    }
    if (e.target.value === "companies") {
      setFilterSearchBar("companies")
      setUsersList(companyNameList);
    }
  }

  useEffect(() => {
    getAllUsers().then((data) => dispatch(data));
    setUsersList([...userNameList, ...companyNameList]);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterSearch === "all") {
      setUsersList([...userNameList, ...companyNameList]);
    }
    if(filterSearch === "users"){
      setUsersList(userNameList);
    }
    if (filterSearch === "companies") {
      setUsersList(companyNameList);
    }
    setUsers(usersList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSearch])
  
  const [selected, setSelected] = useState(-1);
  const navigate = useNavigate();

  return (
    <form
      className={style.form}
      onSubmit={(e) =>
        submitHandler(e, usersFiltered[selected], navigate, users, nameUser)
      }
    >
      <div className={style.container}>
        <input
          onChange={(e) => {
            setNameUser(e.target.value);
            inputHandler(e, setUsersFiltered, users, setSelected, setFocus)
          }}
          onFocus={(e) =>
            inputHandler(e, setUsersFiltered, users, setSelected, setFocus)
          }
          onKeyDown={(e) =>
            keyDownHandler(e, setSelected, selected, usersFiltered)
          }
          value={nameUser}
          className={style.input}
          type="text"
          name=""
          id=""
          placeholder={"Type the name of the user or company"}
        />
        <button className={style.button}>
          <i
            className={"fa-solid fa-magnifying-glass " + style.button__glass}
          ></i>
        </button>
          <select name="AFilter" id="AccountToFilter" className={style.selectUsersCompanies} onChange={(e) => handleSelectChange(e)}>
            <option value="all">All</option>
            <option value="users">Users</option>
            <option value="companies">Companies</option>
          </select>

      </div>

      {usersFiltered.length > 0 && focus ? (
        <ul className={style.suggestion__container}>
          {usersFiltered.map((user, index) => {
            return index <= 4 ? (
              <li
                key={user + "_" + index}
                onClick={(e) =>
                  setNameUser(e.target.innerHTML)
                }
                className={`${style.suggestion__item} ${
                  selected === index ? style.suggestion__itemSelected : ""
                }`}
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