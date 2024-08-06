import { useState, createContext, useContext } from "react";

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
  user: UserProps | null;
  userAuthLogin({ email, password }: UserAuthLogin): Promise<void>;
}

const AuthContext = createContext({} as AuthProvider);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  async function userAuthLogin({ email, password }: UserAuthLogin) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({ user, token });
    } catch (error) {
      alert(ResponseError.message(error));
    }
  }

  return (
    <AuthContext.Provider value={{ user, userAuthLogin }}>
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
