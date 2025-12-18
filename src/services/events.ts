import { Event } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

// Busca todos os eventos (com suporte a filtro)
export async function getEvents(query?: string, page: number = 1) {
  const url = new URL(`${BASE_URL}/events`);
  
  if (query) url.searchParams.append("q", query);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", "6"); // Definimos 6 por página fixo

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao buscar eventos");
  }

  // Agora retorna { data: Event[], total: number, totalPages: number }
  return res.json();
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