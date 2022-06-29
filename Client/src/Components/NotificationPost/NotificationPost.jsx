import { useState } from 'react';
import style from './NotificationPost.module.css';
import { useSelector } from 'react-redux';

export default function NotificationPost({data}) {
    const [state, setState] = useState(0);
    const selector = useSelector(state => state.myUser);

    return (
        <div className={style.containerNotification}>
            <div className={style.postsTitle}>
                <img width='200px'  src={selector.image} alt={selector.name}/>
                <br />
                <strong>{selector.name}</strong>
                <h3>Posts Title</h3>
                {
                    data.map((title, index) => {
                        return (

                            <h4 key={index} onClick={() => setState(index)}>{title.ForumPost.title}</h4>
                        )
                    })
                }
            </div>
            <div className={style.newComment}>
                {data[state].ForumPost.CommentForumPosts.map((resp, index) => {
                    return (
                        <div key={index} className={style.comment}>
                            <div className={style.image}>
                            <img width='100px' src={resp.picture} alt={resp.user}/>
                            <br />
                            <strong>{resp.user}</strong>
                            </div>
                            <div className={style.cmt}>
                            <strong>Comment: </strong>
                            <p>{resp.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}