// app/routes/relatar.tsx
import { Form, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { getSessionUser } from "~/utils/auth.client";
import { saveOccurrence, type Occurrence } from "~/utils/storage.client";

export default function RelatarOcorrencia() {
  const navigate = useNavigate();

  // Proteção de Rota (Client-side)
  useEffect(() => {
    const user = getSessionUser();
    if (!user) {
      navigate("/login?redirectTo=/relatar");
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as Omit<Occurrence, "id" | "comments" | "hasBo"> & { hasBo: string };

    const newOccurrenceData = {
      ...data,
      hasBo: data.hasBo === "Sim",
    }
    
    const newOccurrence = saveOccurrence(newOccurrenceData);
    if(newOccurrence) {
      navigate(`/ocorrencias/${newOccurrence.id}`);
    }
  };

  return (
    <div style={{marginTop: '2rem'}}>
      <h2>Relatar Ocorrência</h2>
      <Form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="local">📍 Local da ocorrência</label>
          <input type="text" id="local" name="local" placeholder="Ex: Rua das Laranjeiras, Bairro Centro" required />
        </div>
        <div className="form-group">
          <label htmlFor="data">📅 Data</label>
          <input type="date" id="data" name="data" required />
        </div>
        <div className="form-group">
          <label htmlFor="crime">🚨 Tipo de crime</label>
          <select id="crime" name="crime" required>
            <option value="">Selecione</option>
            <option value="Roubo">Roubo</option>
            <option value="Furto">Furto</option>
            <option value="Assédio">Assédio</option>
            <option value="Agressão">Agressão</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="descricao">📝 Descrição</label>
          <textarea id="descricao" name="descricao" placeholder="Conte o que aconteceu..." required />
        </div>
        <div className="form-group">
          <label>📄 Você registrou um boletim de ocorrência?</label>
          <select name="hasBo" defaultValue="Não" required>
              <option>Sim</option>
              <option>Não</option>
          </select>
        </div>
         <div className="form-group">
          <label htmlFor="numeroBo">📎 Número do BO (opcional)</label>
          <input type="text" id="numeroBo" name="numeroBo" placeholder="Ex: 2025-000123456-01" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar relato</button>
      </Form>

      <div className="info-box">
          <h3>Por que registrar um BO?</h3>
          <p>Mesmo que pareça que "não vai dar em nada", o registro fortalece a segurança pública.</p>
          <ul>
              <li>Gera dados para pressionar autoridades</li>
              <li>Serve como base legal para futuras condenações</li>
              <li>Pode ser feito online, 100% gratuito</li>
          </ul>
      </div>
    </div>
  );
}
