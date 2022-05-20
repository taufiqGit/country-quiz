import BtnCheck from '../../atoms/btnCheck'
import style from './style.module.css'

export default function ListAnswerCheck(props) {
    const { multipleChoice } = props
    return (
        <ul className={style.wrapAnswer}>
        {
            multipleChoice.map((item, index)=> ((
                            <BtnCheck abcd={item.abcd} countryName={item.name.common} key={index}/>        
                        ))
                    )
        }            
        </ul>
    )
}