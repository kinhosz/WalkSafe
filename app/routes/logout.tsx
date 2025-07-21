// app/routes/logout.tsx
import { redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { logout } from "~/utils/auth.client";

// A função 'logout' do auth.client só vai funcionar no browser,
// então a gente chama ela no cliente e redireciona aqui.
// Esta action é chamada pelo formulário no Header.
export const action = async ({ request }: ActionFunctionArgs) => {
  // A lógica de limpeza real acontece no cliente.
  // O redirecionamento acontece após o formulário ser submetido.
  return redirect("/");
};
