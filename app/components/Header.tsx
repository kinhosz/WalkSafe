// app/components/Header.tsx
import { NavLink, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser, logout } from "~/utils/auth.client";

export function Header() {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  // O useEffect agora também observa o 'user' para re-renderizar se ele mudar
  useEffect(() => {
    setUser(getSessionUser());
  }, [user]);

  const handleLogout = () => {
    logout(); // Limpa o localStorage
    setUser(null); // Atualiza o estado localmente para a UI reagir na hora
    navigate("/"); // Navega para a página inicial
  };

  return (
    <header className="main-header">
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/relatar">Relatar</NavLink>
        <NavLink to="/ocorrencias">Ocorrências</NavLink>
      </nav>
      {user && (
        // Removemos o <Form> e usamos um botão com onClick
        <button type="button" onClick={handleLogout} className="btn btn-logout">
          Sair
        </button>
      )}
    </header>
  );
}
