import { configureStore } from "@reduxjs/toolkit";
import QuestionSlice from "./questionSlice";
import UISlice from "./uiSlice";

const store = configureStore({
    reducer: {
        question: QuestionSlice.reducer,
        ui: UISlice.reducer
    }
})

export default store