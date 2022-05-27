import { UIAction } from "./uiSlice";

export function CheckAnswer(answerTrue, answerFromUser){
    let value = {
        currentAnswerTrue: answerTrue, 
        currentAnswerFromUser: answerFromUser
    }
    if (answerTrue === answerFromUser) {
        return (dispatch)=>{
            dispatch(UIAction.setPosition('checking'))
            dispatch(UIAction.setAnswerConditionTrue(value))
        }
    } else {
        return (dispatch)=>{
            dispatch(UIAction.setPosition('checking'))
            dispatch(UIAction.setAnswerConditionFalse(value))
        }       
    }
}
