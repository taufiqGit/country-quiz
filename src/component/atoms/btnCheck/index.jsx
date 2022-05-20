import { useSelector } from 'react-redux'
import style from './style.module.css'

export default function BtnCheck(props) {
    const { abcd, countryName } = props
    const { conditionAnswerUser, currentAnswerTrue, currentAnswerFromUser } = useSelector(state => state.ui)
    let classBtn = ``
    let classAbcd = ``
    let classTxtCoutry = ``

    if (conditionAnswerUser) {
        if (currentAnswerTrue === abcd) {
            classBtn = `${style.btnTrue}`
            classAbcd = `${style.abcdTxtWhite}`
            classTxtCoutry = `${style.textWhiteAnswer}`
        } else {
            classBtn = `${style.btnDefault}`
            classAbcd = `${style.abcdDefault}`
            classTxtCoutry = `${style.textAnswerDefault}`
        }
    } else{
        if (currentAnswerTrue === abcd) {
            classBtn = `${style.btnTrue}`
            classAbcd = `${style.abcdTxtWhite}`
            classTxtCoutry = `${style.textWhiteAnswer}`
        } else if(currentAnswerFromUser === abcd){
            classBtn = `${style.btnFalse}`
            classAbcd = `${style.abcdTxtWhite}`
            classTxtCoutry = `${style.textWhiteAnswer}`
        } else{
            classBtn = `${style.btnDefault}`
            classAbcd = `${style.abcdDefault}`
            classTxtCoutry = `${style.textAnswerDefault}`
        }
    }
    //console.log(asd);
    return (
        <li className={style.itemAnswer}>
            <button className={`${style.btnAnswer} ${classBtn}`}>
                <span className={`${style.abcd} ${classAbcd}`}>{abcd}</span>
                <span className={`${style.textAnswer} ${classTxtCoutry}`}>{countryName}</span>
            </button>
        </li>            
    )
}