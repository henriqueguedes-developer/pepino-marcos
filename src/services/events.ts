import { Event } from "@/types";

// Dados mockados (simulando banco de dados)
const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Workshop Next.js 15",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-05",
    category: "Educação",
  },
  {
    id: 2,
    title: "Meetup React Brasil",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-12",
    category: "Networking",
  },
  {
    id: 3,
    title: "Hackathon Open Source",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-19",
    category: "Competição",
  },
];

// Função atualizada para aceitar busca!
export async function getEvents(query?: string): Promise<Event[]> {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Começamos assumindo que retornaremos todos
  let filteredEvents = MOCK_EVENTS;

  // Se o usuário mandou uma busca, filtramos a lista
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredEvents = filteredEvents.filter((event) => 
      // Busca no Título OU na Categoria
      event.title.toLowerCase().includes(lowerQuery) || 
      event.category.toLowerCase().includes(lowerQuery)
    );
  }

  return filteredEvents;
}

// Função para buscar um único evento (será usada na FE-06)
export async function getEventById(id: number): Promise<Event | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_EVENTS.find((event) => event.id === id);
}