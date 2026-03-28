import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthRoute from "../../routes/AuthRoute/AuthRoute";

type AuthState = {
    user: null | { id: number | string, fName: string, lName: string, email: string, password: string },
    loading: boolean,
    error: string | null, 
}

const initialState: AuthState = {
    user: null, 
    loading: false, 
    error: null
}

export const login = createAsyncThunk(
    "auth/login",
     
    async (payload: { email: string; password: string }, {rejectWithValue}) => {
        const Auth = new AuthRoute(payload);
        try {
            const res = await Auth.login();
            return res;

        } catch (error) {
            return rejectWithValue(error instanceof Error ?  error : "login failed")
        }
    }); 

const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        logout: (state) => {
            state.user = null;
        }, 
    }, 
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false; 
                state.user = action.payload; 
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload as string;
            })
    }
})

export const {logout} = authSlice.actions
export default authSlice.reducer; 