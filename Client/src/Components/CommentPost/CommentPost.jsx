import Comment from './comment.jsx';
import { useNavigate} from 'react-router-dom';
import style from './CommentPost.module.css';

export default function CommentPost ({props}) {
    const navigate = useNavigate();
    return (
        <div className={style.containerCommentCard}>
            <h2>Comments</h2>
            <div className={style.container}>

            {
              props.CommentForumPosts.length? props.CommentForumPosts.map((comment, index) => {
                    return (
                        <div key={index} className={style.cardComment}>
                            <div style={{borderRight:'solid 1px gray', paddingRight:'10px'}}>

                            <img src={comment.picture} alt="image comment" />
                            <p onClick={() => navigate(`/users/${comment.user}`)}>{comment.user}</p>
                            
                            </div>
                            <div>

                            <strong>Comment: </strong>
                            <p>{comment.content}</p>
                            </div>
                        </div>
                    )
                }): <strong>Not Comment found</strong>
            }
            </div>
            <Comment data={props}/>
        </div>

    )
}