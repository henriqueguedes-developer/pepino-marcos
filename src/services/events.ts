import { Event } from "@/types";

const BASE_URL = "http://localhost:3000/api";

// Busca todos os eventos (com suporte a filtro)
export async function getEvents(query?: string): Promise<Event[]> {
  const url = new URL(`${BASE_URL}/events`);
  
  // Adiciona cache: 'no-store' garante que sempre busque dados frescos do servidor
  // Essencial para ver o evento novo assim que criarmos!
  const response = await fetch(url.toString(), { cache: "no-store" });
  
  if (!response.ok) {
    throw new Error("Falha ao buscar eventos");
  }

  const events: Event[] = await response.json();

  // Filtragem no lado do cliente (simples) ou backend (ideal). 
  // Como nossa API Mock retorna tudo, mantemos o filtro aqui por segurança.
  if (query) {
    const lowerQuery = query.toLowerCase();
    return events.filter((event) => 
      event.title.toLowerCase().includes(lowerQuery) || 
      event.category.toLowerCase().includes(lowerQuery)
    );
  }

  return events;
}

// Busca evento por ID
export async function getEventById(id: number): Promise<Event | undefined> {
  const response = await fetch(`${BASE_URL}/events/${id}`, { cache: "no-store" });
  
  if (!response.ok) {
    return undefined;
  }

  return response.json();
}

// Cria novo evento (Isso é novo!)
export async function createEvent(eventData: Partial<Event>): Promise<Event> {
  const response = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Falha ao criar evento");
  }

  return response.json();
}
// ADICIONANDO DELETES
export async function deleteEvent(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Falha ao deletar evento");
  }
}