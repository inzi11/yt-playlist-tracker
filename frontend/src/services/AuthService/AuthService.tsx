import ApiAuth from "../services";


export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  username: string;
  email: string;
  password: string;
  phone?: string;
}

class AuthRoute{
    private api = new ApiAuth()

    async login(payload: LoginPayload) {
        return this.api.post("/users/login", payload);
    }

    async signup(payload: SignupPayload) {
        return this.api.post("/users/signup", payload);
    }

}

export default AuthRoute
