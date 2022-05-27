import { useDispatch, useSelector } from 'react-redux'
import { CreateQuestion } from '../../../store/questionAction'
import { UIAction } from '../../../store/uiSlice'
import congratIcon from '../../../images/undraw_winners_ao2o.svg'
import style from './style.module.css'

export default function CardResult() {
    const { totalCorrectAnswer } = useSelector(state => state.ui)
    const { listCountries } = useSelector(state => state.question)
    const dispatch = useDispatch()

    const handleTryAgain =()=>{
        dispatch(CreateQuestion(listCountries))
        dispatch(UIAction.setPosition('answer'))
        dispatch(UIAction.tryAgain())
    }
    
    return (
        <section className={style.wrapCardResult}>
            <h2 className={style.titleCardResult}>Country quiz</h2>
            <div className={style.cardResult}>
                <img src={congratIcon} className={style.imgCongrat} alt="congrat" />
                <h1 className={style.textCard1}>Results</h1>
                <p className={style.textCard2}>You got <span>{totalCorrectAnswer}</span> correct answers</p>
                <button className={style.btnCardResult} onClick={handleTryAgain}>Try again</button>
            </div>
        </section>
    )
}