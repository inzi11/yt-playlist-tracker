import {useState } from "react"
import { jwtDecode } from "jwt-decode"
import { AuthContext } from "./AuthContext";
import type { ReactNode } from "react";

type UserType = {
  id: string;
  email: string;
  role: string;
  exp?: number;
};

type Props = {
    children: ReactNode; 
}


const getInitialAuth = (): {
  user: UserType | null;
  isLoggedIn: boolean;
} => {
  const token = localStorage.getItem("token");
  if (!token) return { user: null, isLoggedIn: false };

  try {
    const decoded = jwtDecode<UserType>(token);
    const currentTime = Date.now() / 1000;

    if (!decoded.exp || decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return { user: null, isLoggedIn: false };
    }

    return { user: decoded, isLoggedIn: true };
  } catch {
    localStorage.removeItem("token");
    return { user: null, isLoggedIn: false };
  }
};


export const AuthProvider = ({ children }: Props) => {

  
    const [user, setUser] = useState < UserType | null>(() => getInitialAuth().user);
    const [isLoggedIn, setIsLoggedIn] = useState(()=> getInitialAuth().isLoggedIn);    


    const login = (token: string) => {
    try {
        const decoded = jwtDecode<UserType>(token);
        localStorage.setItem("token", token);
        setUser(decoded);
    } catch {
        console.error("Invalid token");
    }
};
    
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null); 
        setIsLoggedIn(false); 
    }



    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout, }}>
            {children}
        </AuthContext.Provider>
    )
}