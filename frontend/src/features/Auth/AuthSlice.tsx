import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthRoute from "../../services/AuthService/AuthService";
import { jwtDecode } from "jwt-decode";

type AuthState = {
    user: null | { id: number | string, fName: string, lName: string, email: string, password: string },
    loading: boolean,
    error: string | null,
    token: string | null,
    isAuthenticated: boolean 
}

const initialState: AuthState = {
    user: null, 
    loading: false, 
    error: null, 
    token: localStorage.getItem("token"), 
    isAuthenticated: false,
}

export const login = createAsyncThunk(
    "auth/login",
     
    async (payload: { email: string; password: string }, {rejectWithValue}) => {
        const Auth = new AuthRoute();
        try {
            const res = await Auth.login(payload);
            return res;

        } catch (error) {
            return rejectWithValue(error instanceof Error ?  error : "login failed")
        }
    }); 


export const signup = createAsyncThunk(
    "auth/signup",
    async (payload: { name: string; email: string; password: string }, { rejectWithValue }) => {
        const Auth = new AuthRoute();
        try {
            const res = await Auth.signup(payload);
            return res;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error : "signup failed");
        }
    }
)

const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        Userlogout: (state) => {
            state.user = null;
            localStorage.removeItem("token");
            state.token = null;
            state.isAuthenticated = false; 
        }, 
    }, 
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false; 
                const token = action.payload; 

                const decoded = jwtDecode<{ id: number | string, fName: string, lName: string, email: string, password: string }>(token); 

                state.token = action.payload; 
                state.user = decoded; 
                localStorage.setItem("token", action.payload);
                state.isAuthenticated = true; 
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload as string;
            })
        
        // signup
        builder.addCase(signup.pending, (state) => {
            state.loading = true; 
        })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload as string;
        })
    }
})

export const {Userlogout} = authSlice.actions
export default authSlice.reducer; 