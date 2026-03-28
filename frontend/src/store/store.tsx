import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "../features/Auth/AuthSlice.tsx"

// rule 1 import thr slices here and add in the store in reducers obj

export const store = configureStore({
    reducer: {
        auth:  authReducer,
    }
})