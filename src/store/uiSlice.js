import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'UI',
    initialState: {
        isPosition: 'answer',
        totalCorrectAnswer: 0,
        conditionAnswerUser: true,
        currentAnswerTrue: '',
        currentAnswerFromUser: ''      
    },
    reducers: {
        setPosition(state, action) {
            state.isPosition = action.payload
        },
        setAnswerConditionTrue(state, action){
            const {currentAnswerTrue, currentAnswerFromUser} = action.payload
            state.totalCorrectAnswer++
            state.conditionAnswerUser = true
            state.currentAnswerTrue = currentAnswerTrue
            state.currentAnswerFromUser = currentAnswerFromUser
        },
        setAnswerConditionFalse(state, action){
            const {currentAnswerTrue, currentAnswerFromUser} = action.payload
            state.conditionAnswerUser = false
            state.currentAnswerTrue = currentAnswerTrue
            state.currentAnswerFromUser = currentAnswerFromUser
        }, 
        tryAgain(state, action){
            state.totalCorrectAnswer = 0
        }
    }
})

export const UIAction = UISlice.actions
export default UISlice