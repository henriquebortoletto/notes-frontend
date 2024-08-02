import { api } from "@/services";

interface User {
  name: string;
  email: string;
  password: string;
}

export async function createUserService(user: User): Promise<void> {
  return await api.post("/users", user);
}
