// app/utils/storage.client.ts

// Define a interface para uma Ocorrência
export interface Comment {
  author: string;
  text: string;
}

export interface Occurrence {
  id: string;
  local: string;
  data: string;
  crime: string;
  descricao: string;
  hasBo: boolean;
  numeroBo?: string;
  comments: Comment[];
}

const OCCURRENCES_KEY = "walksafe_ocorrencias";

// Função para pegar todas as ocorrências do localStorage
export const getOccurrences = (): Occurrence[] => {
  if (typeof window === "undefined") return []; // Não rodar no servidor
  const data = localStorage.getItem(OCCURRENCES_KEY);
  return data ? JSON.parse(data) : [];
};

// Função para salvar uma nova ocorrência
export const saveOccurrence = (occurrence: Omit<Occurrence, "id" | "comments">) => {
  if (typeof window === "undefined") return;
  const occurrences = getOccurrences();
  const newOccurrence: Occurrence = {
    ...occurrence,
    id: new Date().toISOString(), // ID único simples
    comments: [],
  };
  occurrences.unshift(newOccurrence); // Adiciona no início
  localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
  return newOccurrence;
};

// Função para adicionar um comentário
export const addCommentToOccurrence = (occurrenceId: string, author: string, text: string) => {
    if (typeof window === "undefined") return;
    const occurrences = getOccurrences();
    const occurrenceIndex = occurrences.findIndex(o => o.id === occurrenceId);

    if (occurrenceIndex > -1) {
        const newComment: Comment = { author, text };
        occurrences[occurrenceIndex].comments.push(newComment);
        localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
    }
}
