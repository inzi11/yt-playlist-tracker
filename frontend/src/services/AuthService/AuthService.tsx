import axios, { AxiosError } from "axios"; 


interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

class AuthRoute{
    private Base_URL = "http://localhost:3000/api/users"
    
    private handleError(error: unknown, fallback?: string) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || fallback); 
        }
        throw new Error("Unexpected Err")
    }


    async login(payload: LoginPayload) {
        try {
        const res = await axios.post(`${this.Base_URL}/login`, payload); 
        return res.data;
        } catch (error: unknown) {
        this.handleError(error, "login Error")
}
      
    }

    async signup(payload: SignupPayload) {
        try {
             const res = await axios.post(`${this.Base_URL}/signup`, payload); 
            return res.data; 
            
        } catch (error) {
            this.handleError(error, "signup error");
        }  
    }

}

export default AuthRoute
