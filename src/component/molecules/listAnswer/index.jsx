import style from './style.module.css'

export default function ListAnswer(props) {
    const { multipleChoice, handleSelect } = props
    return (
        <ul className={style.wrapAnswer}>
        {
            multipleChoice.map((item, index)=> ((
                        <li className={style.itemAnswer} key={index}>
                            <button onClick={()=> handleSelect(item.abcd)} className={style.btnAnswer}>
                                <span className={style.abcd}>{item.abcd}</span>
                                <span className={style.textAnswer}>{item.name.common}</span>
                            </button>
                        </li>            
                      ))
                    )
        }            
        </ul>
    )
}