import { useState, useEffect, useContext, createContext } from "react";

import { Error as ResponseError } from "@/utils/Error";
import { api } from "@/services";
import { env } from "@/env";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

interface Session {
  token: string;
  user: User;
}

interface UpdateUserProps {
  avatar: File | null;
  user: {
    name: string;
    email: string;
    password: string;
    old_password: string;
  };
}

interface SignInProps {
  email: string;
  password: string;
}

interface SessionProvider {
  user: User | null;
  updateUser({ user, avatar }: UpdateUserProps): Promise<void>;
  signIn({ email, password }: SignInProps): Promise<void>;
  signOut(): void;
}

const SessionContext = createContext({} as SessionProvider);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Session | null>(null);

  async function handleUpdateUser({ user, avatar }: UpdateUserProps) {
    let userAvatar: string | null = null;

    try {
      if (avatar) {
        const formData = new FormData();
        formData.append("avatar", avatar);

        const response = await api.patch("/users/avatar", formData);
        userAvatar = response.data.avatar;
      }

      await api.put("/users", user);

      const updatedUser: User = {
        ...data!.user,
        name: user.name,
        email: user.email,
        avatar: avatar ? userAvatar : data!.user.avatar,
      };

      setData({ user: updatedUser, token: data!.token });
      localStorage.setItem(env.VITE_KEY_APP, JSON.stringify(updatedUser));

      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      alert(ResponseError.message(error));
    }
  }

  async function handleSignIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem(env.VITE_KEY_APP, JSON.stringify(user));
      localStorage.setItem(env.VITE_KEY_TOKEN, token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      alert(ResponseError.message(error));
    }
  }

  function handleSignOut() {
    localStorage.removeItem(env.VITE_KEY_APP);
    localStorage.removeItem(env.VITE_KEY_TOKEN);

    setData(null);
  }

  useEffect(() => {
    const user = localStorage.getItem(env.VITE_KEY_APP);
    const token = localStorage.getItem(env.VITE_KEY_TOKEN);

    if (!(user && token)) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setData({ user: JSON.parse(user), token });
  }, []);

  return (
    <SessionContext.Provider
      value={{
        user: data?.user ?? null,
        signIn: handleSignIn,
        signOut: handleSignOut,
        updateUser: handleUpdateUser,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within an AuthProvider");
  }

  return context;
};
