import style from "./homeCompany.module.css";


export default function ListPostulates({props}) {
    
    return (
        <div className={style.containerList}>
            <div>

            <h1>
                Postulates
            </h1>
            <br />
            <br />

            {
                props.length?props.map((data, index) => {
                    return (
                        <div key={index}>
                            <span>{data.name}</span>
                            <span>{data.url}</span>
                        </div>
                    )
                }):<h3>Not Postulates</h3>
            }
            </div>
        </div>
    )
}