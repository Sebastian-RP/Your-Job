import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../Redux/Actions/Actions";
import style from "./homeCompany.module.css";
import swal from "sweetalert";
import styled from "styled-components";
import { useEffect } from "react";

export default function PostForm({ props }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const technologies = [...selector.technologies];
  const [techArray, setTechArray] = useState([]);
  const [clearRadio, setClearRadio] = useState(false);
  const [data, setData] = useState({
    titlePost: "",
    experience: "Training",
    typeof_contract: "Seasonal",
    modality: "Remote",
    min_salary: undefined,
    max_salary: undefined,
    descripcion: "",
  });

  const handlerChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob({ ...data, technologiesId: techArray, id: props })).then(
      (resp) => {
        try {
          swal("Ready!", resp.data, "success");
          if (resp.status === 200) {
            handlerReset();
          }
        } catch {
          swal(
            "Error!",
            "The request has not been received, try again!",
            "error"
          );
          handlerReset();
        }
      }
    );
  };

  const handlerTechs = (id) => {
    if (techArray.includes(id)) {
      setTechArray(techArray.filter((tech) => tech !== id));
    } else {
      setTechArray([...techArray, id]);
    }
  };

  const handlerReset = () => {
    setData({
      titlePost: "",
      experience: "",
      typeof_contract: "",
      modality: "",
      min_salary: 0,
      max_salary: 0,
      descripcion: "",
    });
    setClearRadio(true);
    setTimeout(() => {
      setClearRadio(false);
    }, 1000);
    setTechArray([]);
  };

  return (
    <div className={style.containerFormPost}>
      <form onSubmit={(e) => handlerSubmit(e)} className={style.form}>
        <div>
          <input
            className={style.inputForm}
            type="text"
            name="titlePost"
            placeholder="Job Applied for"
            onChange={(e) => handlerChange(e)}
            uncontrolled="true"
            value={data.titlePost}
          />

          <br />
          <input
            className={style.inputForm}
            type="number"
            name="min_salary"
            placeholder="Min salary in USD"
            onChange={(e) => handlerChange(e)}
            controlled="true"
          />
          <br />
          <input
            className={style.inputForm}
            type="number"
            name="max_salary"
            placeholder="Max salary in USD"
            onChange={(e) => handlerChange(e)}
            controlled="true"
          />
          <p style={{ color: "red", fontSize: "10px" }}>
            {parseInt(data.max_salary) > parseInt(data.min_salary)
              ? ""
              : "The maximum value must be longer than minimum value"}
          </p>
          <br />
          <textarea
            name="descripcion"
            cols="30"
            rows="6"
            placeholder="Description"
            onChange={(e) => handlerChange(e)}
            uncontrolled="true"
            value={data.descripcion}
          />
          <br />
          <br />
          <label>
            <strong>Experience:</strong>{" "}
          </label>
          <select
            name="experience"
            onChange={(e) => handlerChange(e)}
            controlled="true"
          >
            <option value="Training">Training</option>
            <option value="Junior">Junior</option>
            <option value="Semi-Senior">Semi-senior</option>
            <option value="Senior">Senior</option>
          </select>
          <br />
          <label>
            <strong>Type of contract:</strong>{" "}
          </label>
          <select
            name="typeof_contract"
            onChange={(e) => handlerChange(e)}
            controlled="true"
          >
            <option value="Seasonal">Seasonal</option>
            <option value="Indeterminate">Indeterminate</option>
            <option value="termino fijo">Fixed term</option>
            <option value="termino indefinido">Indefinite term</option>
          </select>
          <br />
          <label>
            <strong>Modality:</strong>{" "}
          </label>
          <select
            name="modality"
            onChange={(e) => handlerChange(e)}
            controlled="true"
          >
            <option value="Remote">Remote</option>
            <option value="Presential">Face-to-face</option>
          </select>
        </div>
        <div>
          <label>
            <strong>Technologies:</strong>
          </label>
          {technologies.map((data, index) => {
            return (
              <div key={index} className={style.buttonRadio}>
                <input
                  type="checkbox"
                  checked={clearRadio ? false : undefined}
                  name={data.name}
                  key={index}
                  value={data.id}
                  onChange={(e) => handlerTechs(e.target.value)}
                />
                <label htmlFor={data.name}>{data.name}</label>
              </div>
            );
          })}
          <p style={{ color: "red", fontSize: "10px" }}>
            {!techArray.length ? "You must mark at least one option" : ""}
          </p>
          <br />
          <Button
            variant="success"
            disabled={!techArray.length ? true : false}
            className={style.buttonSubmit}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
      <Button
        variant="primary"
        className={style.buttonReset}
        onClick={handlerReset}
      >
        Reset
      </Button>
    </div>
  );
}

const Button = styled.button`
  background-color: #1c5d99;
  border-radius: 5px;
  color: white;
  padding: 7px 10px 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;

  cursor: pointer;
  transition: all 300ms;
  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
`;
