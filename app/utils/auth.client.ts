// app/utils/auth.client.ts
const USER_SESSION_KEY = "walksafe_user";

// Inicia uma sessão (salva no localStorage)
export const createSession = (username: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_SESSION_KEY, username);
};

// Pega o usuário da sessão
export const getSessionUser = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USER_SESSION_KEY);
};

// Encerra a sessão
export const logout = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(USER_SESSION_KEY);
};
