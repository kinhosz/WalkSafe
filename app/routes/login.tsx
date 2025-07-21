// app/routes/login.tsx
import { Form, useNavigation, useSearchParams } from "@remix-run/react";
import { createSession } from "~/utils/auth.client";
import { useNavigate } from "react-router-dom";
import type { ActionFunctionArgs } from "@remix-run/node";

// Esta action é apenas para o Remix funcionar, a lógica real está no cliente.
export async function action({ request }: ActionFunctionArgs) {
  return null;
}

export default function Login() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    
    if (username) {
      createSession(username);
      navigate(redirectTo);
    }
  };

  return (
    <div className="form-container" style={{ marginTop: '2rem' }}>
      <h2>Login</h2>
      <p>Para relatar uma ocorrência, por favor, faça o login. (Qualquer nome de usuário é válido).</p>
      <Form onSubmit={handleLogin} method="post">
        <div className="form-group">
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" name="username" required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </Form>
    </div>
  );
}
