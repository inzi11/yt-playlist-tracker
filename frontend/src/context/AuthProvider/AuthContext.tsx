import { createContext} from "react";


type UserType = {
  id: string;
  email: string;
  role: string;
  exp?: number;
};

type AuthProviderType = {
    user: UserType | null;
    isLoggedIn: boolean;
    userLogin: (token: string) => void; 
    userLogout: () => void;
}


export const AuthContext = createContext<AuthProviderType | null>(null); 


