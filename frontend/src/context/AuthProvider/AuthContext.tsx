import { createContext } from "react";
import type { LoginPayload, SignupPayload } from "../../services/AuthService/AuthService";

export type UserType = {
  id: string;
  email: string;
  role: string;
  exp?: number;
};

type AuthProviderType = {
  user: UserType | null;
  isLoggedIn: boolean;
  userLogin: (payload: LoginPayload) => Promise<void>;
  userSignup: (payload: SignupPayload) => Promise<void>;
  userLogout: () => void;
};

export const AuthContext = createContext<AuthProviderType | null>(null);


