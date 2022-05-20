import axios from "axios";
import { QuestionAction } from "./questionSlice";
import CreateMultipleChoice from "../util/createMultipleChoice";

export function CreateQuestion(listCountry) {        
    const multipleChoice = CreateMultipleChoice(listCountry)
    let randomIndex = Math.floor(Math.random() * multipleChoice.length)
    let getRandomQuestion = multipleChoice[randomIndex]
   console.log(getRandomQuestion, 'alt');
    const randomNum =  randomIndex % 2 
    const question = randomNum ? `${getRandomQuestion.capital[0]} is the capital of ?` : 'Which country does this flag belong to ?'
    const flag = randomNum ? null : getRandomQuestion.flags.png
    return (dispatch)=>{
        console.log(getRandomQuestion.abcd, 'kol');
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
            //console.log(checkDataLocal, 'hi');
            let result
            if (!checkDataLocal) {
                const req = await axios.get('https://restcountries.com/v3.1/all')
                result = req.data
                localStorage.setItem('Countries', JSON.stringify(result))
            } else{
                let fromLocal = localStorage.getItem('Countries')
                result = JSON.parse(fromLocal)
            }
           
            console.log(result, 'kokok');
            dispatch(QuestionAction.addListCountries(result))
        } catch (error) {
            console.log(error);
        }        
    }
}

