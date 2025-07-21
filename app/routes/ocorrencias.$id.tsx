// app/routes/ocorrencias.$id.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser } from "~/utils/auth.client";
import { addCommentToOccurrence, getOccurrences, type Occurrence } from "~/utils/storage.client";

// O loader apenas passa o ID para o componente
export const loader = async ({ params }: LoaderFunctionArgs) => {
  return { id: params.id };
};

export default function OcorrenciaDetalhe() {
  const { id } = useLoaderData<typeof loader>();
  const [occurrence, setOccurrence] = useState<Occurrence | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const params = useParams(); // Para forçar a re-renderização

  useEffect(() => {
    const occurrences = getOccurrences();
    const found = occurrences.find((o) => o.id === id) || null;
    setOccurrence(found);
    setUser(getSessionUser());
  }, [id, params]); // Re-executa se a URL mudar (após novo comentário)

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("comment") as string;
    
    if (text && user && id) {
      addCommentToOccurrence(id, user, text);
      // Força a re-renderização para mostrar o novo comentário
      setOccurrence(prev => {
        if (!prev) return null;
        return {...prev, comments: [...prev.comments, {author: user, text}]}
      });
      (event.target as HTMLFormElement).reset();
    }
  };

  if (!occurrence) {
    return <p>Ocorrência não encontrada.</p>;
  }

  return (
    <div className="occurrence-card" style={{marginTop: '2rem'}}>
      <h2>Detalhe da Ocorrência</h2>
      <p><strong>Crime:</strong> {occurrence.crime}</p>
      <p><strong>Local:</strong> {occurrence.local}</p>
      <p><strong>Data:</strong> {new Date(occurrence.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
      <p><strong>Descrição:</strong> {occurrence.descricao}</p>
      {occurrence.hasBo && <p className="occurrence-info-tag">✓ Com BO informado (não verificado)</p>}
      
      <div className="comments-section">
        <h3>Comentários</h3>
        <Form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <textarea name="comment" placeholder={user ? "Deixe seu comentário..." : "Faça login para comentar"} disabled={!user} required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!user}>Enviar</button>
        </Form>
        <div className="comments-list">
          {occurrence.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
