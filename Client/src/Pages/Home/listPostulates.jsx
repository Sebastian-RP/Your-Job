import style from "./homeCompany.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllPostsFromCompany, hire } from "../../Redux/Actions/Actions";
import styled from "styled-components";
import { useState } from "react";
import swal from "sweetalert";

export default function ListPostulates({ props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [list, setList] = useState(props[0]);

  const handleHire = (user, companyId) => {
    setList(list.filter((olduser) => olduser.id !== user.id));
    dispatch(hire(user.id, companyId)).then((res) => {
      swal({
        title: "User Hired!",
        text: `${user.name} has been hired.`,
        icon: "success",
      });

      dispatch(getAllPostsFromCompany(props[2].id));
    });
  };

  return (
    <div className={style.containerList}>
      <div>
        <ButtonCanceled
          variant="danger"
          // className={style.buttonCancel}
          onClick={() => props[1](false)}
        >
          Back
        </ButtonCanceled>
        <h1>Postulates</h1>
        <br />
        <br />

        {props.length ? (
          list.map((data, index) => {
            return (
              <div key={index} className={style.cardPostulate}>
                <span
                  onClick={() => navigate(`/users/${data.name}`)}
                  className={style.spanName}
                >
                  {data.name}
                </span>

                <Button variant="primary">
                  <a href={data.cv} download>
                    Download CV
                  </a>
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    handleHire(data, props[2].id);
                  }}
                >
                  Hire
                </Button>
              </div>
            );
          })
        ) : (
          <h3>No Postulates</h3>
        )}
      </div>
    </div>
  );
}

const ButtonCanceled = styled.button`
  background-color: white;
  border-radius: 5px;
  color: #222222;
  padding: 7px 10px 7px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;
  position: fixed;
  z-index: 4;
  top: 55px;
  right: 0px;
  &:hover {
    color: white;
    background-color: #1c5d99;
  }
`;
