import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../Redux/Actions/Actions";
import style from "./homeCompany.module.css";

export default function PostForm() {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const technologies = [...selector.technologies];
    const [techArray, setTechArray] = useState([]);
    const [data, setData] = useState({
        titlePost:'',
        experience: '',
        typeof_contract: '',
        modality: '',
        min_salary: 0,
        max_salary: 0,
        descripcion: ''
    })

    const handlerChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(createJob({...data, technologiesId:techArray}))
    }

  return (
    <div className={style.containerFormPost}>
      <div>
        <form onSubmit={(e) => handlerSubmit(e)}>
            <div>

          <input type="text" name='titlePost' placeholder="Job Applied for" onChange={(e) => handlerChange(e)}/>
          <br />
          <label>Experience: </label>
          <select name="experience" defaultValue='' onChange={(e) => handlerChange(e)}>
            <option value="trainig">trainig</option>
            <option value="junior" >
              junior
            </option>
            <option value="semi-senior">semi-senior</option>
            <option value="senior">senior</option>

          </select>
          <br />
          <label>type of contract: </label>
          <select name="typeof_contract" onChange={(e) => handlerChange(e)}>
            <option value="por labor">por labor</option>
            <option value="temporal">
            temporal
            </option>
            <option value="termino fijo">termino fijo</option>
            <option value="termino indefinido">termino indefinido</option>

          </select>
          <br />
          <label>Modality: </label>
          <select name="modality" onChange={(e) => handlerChange(e)}>
            <option value="remoto">remoto</option>
            <option value="presencial" >
            presencial
            </option>

          </select>
          <br />
          <input type="number" name='min_salary' placeholder="Min salary in USD" onChange={(e) => handlerChange(e)}/>
          <br />
          <input type="number" name='max_salary' placeholder="Max salary in USD" onChange={(e) => handlerChange(e)}/>
          <br />
          <textarea name="descripcion" cols="30" rows="10" placeholder="Description" onChange={(e) => handlerChange(e)}/>
          <br />
        </div>
        <div>

          <label>Tecnologies:</label>
          {
            technologies.map((data, index) => {
                return (
                    <div key={index}>
                        <label htmlFor={data.name}>{data.name}</label>
                        <input type="radio"  name={data.name} id={data.name} value={data.id} onChange={(e) => setTechArray([...techArray, e.target.value])}/>
                    </div>
                )
            })
          }
          <br />
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}
