import { useContext, useState, type Dispatch, type SetStateAction } from "react";
import { AuthContext } from "./AuthContext";
import type { ReactNode } from "react";
import AuthRoute, { type LoginPayload, type SignupPayload } from "../../services/AuthService/AuthService";
import type { UserType } from "./AuthContext";
import {jwtDecode} from "jwt-decode"

type Props = {
  children: ReactNode;
};

const authRoute = new AuthRoute();

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

const setTokenAndUser = (
  token: string,
  setUser: Dispatch<SetStateAction<UserType | null>>,
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
) => {
  const decoded = jwtDecode<UserType>(token);
  localStorage.setItem("token", token);
  setUser(decoded);
  setIsLoggedIn(true);
};

export const AuthProvider = ({ children }: Props) => {
  const initialAuth = getInitialAuth();
  const [user, setUser] = useState<UserType | null>(() => initialAuth.user);
  const [isLoggedIn, setIsLoggedIn] = useState(() => initialAuth.isLoggedIn);

  const userLogin = async (payload: LoginPayload) => {
    try {
      const res = await authRoute.login(payload);
      const token = (res as any)?.token ?? (res as any)?.data?.token;
      if (!token) {
        throw new Error("Login response did not include a token");
      }
      setTokenAndUser(token, setUser, setIsLoggedIn);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const userSignup = async (payload: SignupPayload) => {
    try {
      await authRoute.signup(payload);
    } catch (error) {
      console.error("Signup failed", error);
      throw error;
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, userLogin, userSignup, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Error while loading the auth context");
  }

  return context;
};


