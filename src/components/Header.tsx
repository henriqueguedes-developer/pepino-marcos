"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, login, logout } = useAuth();

  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white shadow-md">
      <div>
        <h1 className="text-xl font-bold tracking-wide">Gerenciador de Eventos</h1>
      </div>

      <nav className="flex items-center gap-4">
        {user ? (
          
          <>
            <span className="text-sm text-slate-300">Olá, {user.name}</span>
            <button 
              onClick={logout}
              className="rounded border border-red-500 px-3 py-1 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              Sair
            </button>
          </>
        ) : (
          <button 
            onClick={login}
            className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500"
          >
            Login (Simulado)
          </button>
        )}
      </nav>
    </header>
  );
}