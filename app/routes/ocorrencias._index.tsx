// app/routes/ocorrencias._index.tsx
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getOccurrences, type Occurrence } from "~/utils/storage.client";

export default function OcorrenciasLista() {
  const [occurrences, setOccurrences] = useState<Occurrence[]>([]);

  useEffect(() => {
    // Carrega os dados do localStorage no cliente
    setOccurrences(getOccurrences());
  }, []);

  return (
    <div style={{marginTop: '2rem'}}>
      <h2>Ocorrências recentes no Bairro Centro</h2>
      {occurrences.length > 0 ? (
        occurrences.map((occ) => (
          <div key={occ.id} className="occurrence-card">
            <h3>
              <Link to={`/ocorrencias/${occ.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                {occ.crime} — {new Date(occ.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
              </Link>
            </h3>
            <p>{occ.descricao}</p>
            {occ.hasBo && <span className="occurrence-info-tag">✓ Com BO informado (não verificado)</span>}
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                💬 {occ.comments.length} comentário(s)
            </p>
          </div>
        ))
      ) : (
        <p>Nenhuma ocorrência registrada ainda.</p>
      )}
    </div>
  );
}
