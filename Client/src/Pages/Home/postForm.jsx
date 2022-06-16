import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../Redux/Actions/Actions";
import style from "./homeCompany.module.css";
import {Button} from 'react-bootstrap'

export default function PostForm({props}) {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const technologies = [...selector.technologies];
    const [techArray, setTechArray] = useState([]);
    const [clearRadio, setClearRadio] = useState(false);
    const [data, setData] = useState({
        titlePost:'',
        experience: '',
        typeof_contract: '',
        modality: '',
        min_salary: undefined,
        max_salary: undefined,
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
        .then(resp =>{
          try {

            alert(resp.data)
            if(resp.status === 200){
              handlerReset()
            }
          } catch{

            alert("Request has not been received: try again!")
            handlerReset()
          }
          
        })
    }

    const handlerReset = () => {
      setData({
        titlePost:'',
        experience: '',
        typeof_contract: '',
        modality: '',
        min_salary: 0,
        max_salary: 0,
        descripcion: ''
      })
      setClearRadio(true);
      setTimeout(() => {
        
        setClearRadio(false);
      }, 1000);
      setTechArray([])
    }
   
  return (
    <div className={style.containerFormPost}>
        <form onSubmit={(e) => handlerSubmit(e)} className={style.form}>
         
            <div>

          <input className={style.inputForm} type="text" name='titlePost' placeholder="Job Applied for" onChange={(e) => handlerChange(e)} uncontrolled="true" value={data.titlePost}/>
         
          <br />
          <input className={style.inputForm} type="number" name='min_salary' placeholder="Min salary in USD" onChange={(e) => handlerChange(e)} controlled="true" />
          <br />
          <input className={style.inputForm} type="number" name='max_salary' placeholder="Max salary in USD" onChange={(e) => handlerChange(e)}  controlled="true" />
          <p style={{color:'red',fontSize:'10px'}}>{data.max_salary > data.min_salary?'':"the maximum value must be longer than minimum value"}</p>
          <br />
          <textarea name="descripcion" cols="30" rows="6" placeholder="Description" onChange={(e) => handlerChange(e)} uncontrolled ="true"  value={data.descripcion}/>
          <br />
          <br />
          <label><strong>Experience:</strong>  </label>
          <select name="experience" onChange={(e) => handlerChange(e)}  controlled ="true">
            <option value="trainig">trainig</option>
            <option value="junior" >
              junior
            </option>
            <option value="semi-senior">semi-senior</option>
            <option value="senior">senior</option>

          </select>
          <br />
          <label><strong>type of contract:</strong> </label>
          <select name="typeof_contract" onChange={(e) => handlerChange(e)}  controlled = "true" >
            <option value="por labor">por labor</option>
            <option value="temporal">
            temporal
            </option>
            <option value="termino fijo">termino fijo</option>
            <option value="termino indefinido">termino indefinido</option>

          </select>
          <br />
          <label><strong>Modality:</strong> </label>
          <select name="modality" onChange={(e) => handlerChange(e)}  controlled ="true" >
            <option value="remoto">remoto</option>
            <option value="presencial" >
            presencial
            </option>

          </select>
        </div>
        <div>

          <label><strong>Tecnologies:</strong></label>
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
          <p style={{color:'red',fontSize:'10px'}}>{!techArray.length?"You must mark at least one option":""}</p>
          <br />
          <Button variant='success' disabled={!techArray.length?true:false}  className={style.buttonSubmit} type="submit">Submit</Button>
        </div>
        
        </form>
        <Button variant='primary' className={style.buttonReset} onClick={handlerReset}>Reset</Button>
    </div>
  );
}
