import { Event } from "@/types";

// Dados mockados (simulando banco de dados)
const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Workshop Next.js 15",
    location: "São Paulo, SP (Online)",
    date: "2024-12-10",
    category: "Educação",
  },
  {
    id: 2,
    title: "Meetup React Brasil",
    location: "Rio de Janeiro, RJ",
    date: "2024-11-20",
    category: "Networking",
  },
  {
    id: 3,
    title: "Hackathon Open Source",
    location: "Remoto",
    date: "2024-10-15",
    category: "Competição",
  },
];

// Função que simula a chamada à API
export async function getEvents(): Promise<Event[]> {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return MOCK_EVENTS;
}

// Já vamos deixar pronta a função para buscar um único evento (será usada na FE-06)
export async function getEventById(id: number): Promise<Event | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_EVENTS.find((event) => event.id === id);
}