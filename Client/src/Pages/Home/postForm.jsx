import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../Redux/Actions/Actions";
import style from "./homeCompany.module.css";

export default function PostForm({props}) {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const technologies = [...selector.technologies];
    const [techArray, setTechArray] = useState([]);
    const [clearRadio, setClearRadio] = useState(false)
    const [data, setData] = useState({
        titlePost:'',
        experience: '',
        typeof_contract: '',
        modality: '',
        min_salary: null,
        max_salary: null,
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
        dispatch(createJob({...data, technologiesId:techArray, id : props}))
        .then(data =>{
          if(data.status === 200){
            setData({
              titlePost:'',
              experience: '',
              typeof_contract: '',
              modality: '',
              min_salary: null,
              max_salary: null,
              descripcion: ''
            })
            setClearRadio(true);
            setTimeout(() => {
              
              setClearRadio(false);
            }, 1000);
          }
        })
    }
   
  return (
    <div className={style.containerFormPost}>
        <form onSubmit={(e) => handlerSubmit(e)} className={style.form}>
         
            <div>

          <input className={style.inputForm} type="text" name='titlePost' placeholder="Job Applied for" onChange={(e) => handlerChange(e)} value={data.titlePost}/>
         
          <br />
          <input className={style.inputForm} type="number" name='min_salary' placeholder="Min salary in USD" onChange={(e) => handlerChange(e)}  value={data.min_salary}/>
          <br />
          <input className={style.inputForm} type="number" name='max_salary' placeholder="Max salary in USD" onChange={(e) => handlerChange(e)}  value={data.max_salary}/>
          <br />
          <textarea name="descripcion" cols="30" rows="6" placeholder="Description" onChange={(e) => handlerChange(e)}  value={data.descripcion}/>
          <br />
          <br />
          <label>Experience: </label>
          <select name="experience" defaultValue='' onChange={(e) => handlerChange(e)}  value={data.experience}>
            <option value="trainig">trainig</option>
            <option value="junior" >
              junior
            </option>
            <option value="semi-senior">semi-senior</option>
            <option value="senior">senior</option>

          </select>
          <br />
          <label>type of contract: </label>
          <select name="typeof_contract" onChange={(e) => handlerChange(e)}  value={data.typeof_contract}>
            <option value="por labor">por labor</option>
            <option value="temporal">
            temporal
            </option>
            <option value="termino fijo">termino fijo</option>
            <option value="termino indefinido">termino indefinido</option>

          </select>
          <br />
          <label>Modality: </label>
          <select name="modality" onChange={(e) => handlerChange(e)}  value={data.modality}>
            <option value="remoto">remoto</option>
            <option value="presencial" >
            presencial
            </option>

          </select>
        </div>
        <div>

          <label>Tecnologies:</label>
          {
            technologies.map((data, index) => {
                return (
                    <div key={index} className={style.buttonRadio}>
                        <input type="radio" checked={clearRadio?false:undefined}  name={data.name} id={data.name} value={data.id} onChange={(e) => setTechArray([...techArray, e.target.value])}/>
                        <label htmlFor={data.name}>{data.name}</label>
                    </div>
                )
            })
          }
          <br />
          <button type="submit">Submit</button>
        </div>
        
        </form>
    </div>
  );
}
