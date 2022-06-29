import { useState } from 'react';
import style from './NotificationPost.module.css';

export default function NotificationPost({data}) {
    const [state, setState] = useState(0);
    return (
        <div className={style.containerNotification}>
            <div>
                {
                    data.map((title, index) => {
                        return (

                            <h3 key={index} onClick={() => setState(index)}>{title.ForumPost.title}</h3>
                        )
                    })
                }
            </div>
            <div>
                {data[state].ForumPost.CommentForumPosts.map((resp, index) => {
                    return (
                        <p key={index}>{resp.content}</p>
                    )
                })}
            </div>
        </div>
    )
}