import axios, { AxiosError } from "axios"; 


class AuthRoute{

    paylod: Record<string, string | number>;
    Base_URL= "http://localhost:3000/api/users"
    
    constructor( paylod: Record<string, string | number>){
    this.paylod = paylod
    }

    async login() {
        try {
        const res = await axios.post(`${this.Base_URL}/login`, this.paylod); 
        return res.data;
        } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || "Login failed");
        }

        throw new Error("Something went wrong");
}
      
    }

    async signup() {
        const res = await axios.post(`${this.Base_URL}/signup`, this.paylod); 
        return res.data; 
    }

}

export default AuthRoute
