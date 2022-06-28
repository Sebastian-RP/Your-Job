import { useDispatch, useSelector } from "react-redux";
import { createCommentPost, getAllForumPost } from "../../Redux/Actions/Actions";
import swal from 'sweetalert';
import { useState } from "react";
import style from "../Post/Post.module.css";



export default function Comment({data}) {

    
    const dispatch = useDispatch();
    const selector = useSelector(state => state.myUser);
    const [valueComment, setValueComment] = useState('');
    const [error, setError] = useState(false);

    const handlerComment = () => {
        if(valueComment) {

            dispatch(createCommentPost({
              id: data, 
              content: valueComment, 
              user: selector.error?"Anonimous":selector.name, 
              picture: selector.image
            })).then(val => {
              if(!val.data.message){
                dispatch(getAllForumPost());
                setError(false)
              }else {
                swal({
                  title: "Oops!",
                  text: "Something went wrong",
                  icon: "warning",
                })
              }
              setValueComment("")
            })
        }else {
            swal({
              title: "Oops!",
              text: "Something went wrong",
              icon: "warning",
            })
            if(valueComment === "") setError(true)
          }
      }
    
    return (
        <div className={style.comment}>
        <textarea name="comment" placeholder="Comment here" onChange={(e) => setValueComment(e.target.value)} value={valueComment}/>
        {error&&<p style={{color:'red'}}>it's Empty</p>}
        <br />
        <div>
        <button onClick={handlerComment}>Send</button>
        </div>
      </div>
    )
}