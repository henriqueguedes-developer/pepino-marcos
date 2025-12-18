"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (email: string, pass: string) => Promise<void>; // Agora login retorna uma Promise
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email: string, pass: string) {
    setIsLoading(true);
    
    // Simula um delay de rede (pra dar aquele suspense gostoso)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Validação "Hardcoded" (O segredo do Master Chef)
      if (pass === "123456") {
        setUser({ name: "Admin Iplan", email });
        router.push("/"); // Manda pra home logado
      } else {
        throw new Error("Senha incorreta (Dica: 123456)");
      }
    } catch (error) {
      throw error; // Joga o erro pra página de login tratar
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);