import Comment from './comment.jsx';
import style from './CommentPost.module.css';

export default function CommentPost ({props}) {
    
    return (
        <div className={style.containerCommentCard}>
            {
              props.CommentForumPosts.length? props.CommentForumPosts.map((comment, index) => {
                    return (
                        <div key={index} className={style.cardComment}>
                            <div style={{borderRight:'solid 1px gray', paddingRight:'10px'}}>

                            <img src={comment.picture} alt="image comment" />
                            <p>{comment.user}</p>
                            </div>
                            <div>

                            <strong>Comment: </strong>
                            <p>{comment.content}</p>
                            </div>
                        </div>
                    )
                }): <h2>Not Comment found</h2>
            }
            <Comment data={props.id}/>
        </div>

    )
}