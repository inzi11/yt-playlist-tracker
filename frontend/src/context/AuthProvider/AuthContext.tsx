import { createContext } from "react";


type UserType = {
  id: string;
  email: string;
  role: string;
  exp?: number;
};

type AuthProviderType = {
    user: UserType | null;
    isLoggedIn: boolean;
    login: (token: string) => void; 
    logout: () => void;
}

export const AuthContext = createContext<AuthProviderType | null>(null); 
