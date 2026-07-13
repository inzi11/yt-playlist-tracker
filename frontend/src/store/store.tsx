import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./slice/PlaylistSlice";

// rule 1 import thr slices here and add in the store in reducers obj

export const store = configureStore({
    reducer: {
        playlist: playlistReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
