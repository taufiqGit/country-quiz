import style from './index.module.css'
import adventureImg from '../../../images/undraw_adventure_4hum.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { CreateQuestion } from '../../../store/questionAction';
import { CheckAnswer } from '../../../store/uiAction';
import ListAnswer from '../../molecules/listAnswer';
import ListAnswerCheck from '../../molecules/listAnswerCheck';
import { UIAction } from '../../../store/uiSlice';

export default function CardQuiz() {
    const { multipleChoice, listCountries, question, answerTrue, flag } = useSelector(state => state.question)
    const { isPosition, conditionAnswerUser } = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const handleSelect = (answerFromUser)=>{
       dispatch(CheckAnswer(answerTrue, answerFromUser)) 
    }

    const handleNext =()=>{
        if (conditionAnswerUser) {
            dispatch(CreateQuestion(listCountries))
            dispatch(UIAction.setPosition('answer'))
        } else {
            dispatch(UIAction.setPosition('try again'))
        }
    }
    
    useEffect(()=>{
        if (isPosition === 'answer') {
             dispatch(CreateQuestion(listCountries))
        }
    }, [isPosition])

    return(
        <section className={style.wrapCardQuiz}>
            <h2 className={style.titleCardQuiz}>Country quiz</h2>
            <div className={style.cardQuiz}>
                <img src={adventureImg} className={style.adventureImg} alt="av" />
                <p className={style.questions}>{question}</p>
                {
                    flag ? <img className={style.imgFlag} src={flag} alt="flag country" /> : ''
                }
                {
                    isPosition === 'answer' ? (
                        <ListAnswer multipleChoice={multipleChoice} handleSelect={handleSelect}/>
                    ) : isPosition === 'checking' ? (
                        <ListAnswerCheck multipleChoice={multipleChoice}/>
                    ) : ''
                }
                {
                    isPosition === 'checking' ? (
                        <div className={style.wrapBtnNext}>
                            <button onClick={handleNext} className={style.btnNext}>Next</button>
                        </div>
                    ) : ''
                }
            </div>
        </section>
    )
}