import { createSlice } from "@reduxjs/toolkit";

const QuestionSlice = createSlice({
    name: 'Question',
    initialState: {
        listCountries: [],
        question: '',
        flag: '',
        multipleChoice: [],
        answerTrue: '',
    },
    reducers: {
        addListCountries(state, action){
            state.listCountries = action.payload
        },
        addNewQuestion(state, action){
            const { multipleChoice, question, answerTrue, flag } = action.payload
            state.multipleChoice = multipleChoice
            state.question = question
            state.answerTrue = answerTrue
            state.flag = flag
        }
    }
})

export const QuestionAction = QuestionSlice.actions
export default QuestionSlice