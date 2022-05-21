import axios from "axios";
import { QuestionAction } from "./questionSlice";
import CreateMultipleChoice from "../util/createMultipleChoice";

export function CreateQuestion(listCountry) {        
    const multipleChoice = CreateMultipleChoice(listCountry)
    const randomIndex = Math.floor(Math.random() * multipleChoice.length)
    const getRandomQuestion = multipleChoice[randomIndex]
    const randomNum =  randomIndex % 2 
    const question = randomNum ? `${getRandomQuestion.capital[0]} is the capital of ?` : 'Which country does this flag belong to ?'
    const flag = randomNum ? null : getRandomQuestion.flags.png
    return (dispatch)=>{
        let value = {
            multipleChoice,
            question,
            flag,
            answerTrue: getRandomQuestion.abcd
        }
        
        dispatch(QuestionAction.addNewQuestion(value))
    }
}

export function GetInitCountries() {
    return async (dispatch)=>{
        try {
            let checkDataLocal = localStorage.getItem('Countries')
            let result
            if (!checkDataLocal) {
                const req = await axios.get('https://restcountries.com/v3.1/all')
                result = req.data
                localStorage.setItem('Countries', JSON.stringify(result))
            } else{
                let fromLocal = localStorage.getItem('Countries')
                result = JSON.parse(fromLocal)
            }
           
            dispatch(QuestionAction.addListCountries(result))
        } catch (error) {
            console.error(error);
        }        
    }
}

