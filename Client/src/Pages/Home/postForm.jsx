import style from "./homeCompany.module.css";


export default function PostForm() {
    return (
        <div className={style.containerFormPost}>
            <div>

            <form>
                <input type="text" placeholder="Name"/>
                <br />
                <input type="text" placeholder="Name"/>
                <br />
                <input type="text" placeholder="Name"/>
                <br />
                <input type="text" placeholder="Name"/>
                <br />
                <input type="text" placeholder="Name"/>
                <br />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}