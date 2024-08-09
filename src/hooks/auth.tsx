import { useState, useEffect, useContext, createContext } from "react";

import { Error as ResponseError } from "@/utils/Error";
import { api } from "@/services";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

interface UserProps {
  user: User;
  token: string;
}

interface UserAuthLogin {
  email: User["email"];
  password: User["password"];
}

interface AuthProvider {
  userAuth: UserProps | null;
  userAuthLogin({ email, password }: UserAuthLogin): Promise<void>;
  userAuthLogout(): void;
}

const AuthContext = createContext({} as AuthProvider);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userAuth, setUserAuth] = useState<UserProps | null>(null);

  async function userAuthLogin({ email, password }: UserAuthLogin) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem(import.meta.env.VITE_KEY_APP, JSON.stringify(user));
      localStorage.setItem(import.meta.env.VITE_KEY_TOKEN, token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUserAuth({ user, token });
    } catch (error) {
      alert(ResponseError.message(error));
    }
  }

  function userAuthLogout() {
    localStorage.removeItem(import.meta.env.VITE_KEY_APP);
    localStorage.removeItem(import.meta.env.VITE_KEY_TOKEN);

    setUserAuth(null);
  }

  console.log("> [userAuth]", userAuth);

  useEffect(() => {
    const user = localStorage.getItem(import.meta.env.VITE_KEY_APP);
    const token = localStorage.getItem(import.meta.env.VITE_KEY_TOKEN);

    if (!(user && token)) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUserAuth({ user: JSON.parse(user), token });
  }, []);

  return (
    <AuthContext.Provider value={{ userAuth, userAuthLogin, userAuthLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
