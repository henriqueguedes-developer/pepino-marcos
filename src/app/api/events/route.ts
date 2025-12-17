import { NextResponse } from "next/server";
import { Event } from "@/types";

// Vamos mover nossos dados mockados para cá, para servirem como nosso "Banco de Dados em Memória"
// Nota: Em produção, isso seria um banco SQL/Postgres real.
let events: Event[] = [
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

// Método GET (Listar eventos)
export async function GET() {
  return NextResponse.json(events);
}

// Método POST (Criar evento)
export async function POST(request: Request) {
  const body = await request.json();

  // Simples validação
  if (!body.title || !body.date) {
    return NextResponse.json(
      { message: "Dados incompletos" },
      { status: 400 }
    );
  }

  const newEvent: Event = {
    id: events.length + 1, // Gera um ID simples
    title: body.title,
    location: body.location,
    date: body.date,
    category: body.category,
  };

  events.push(newEvent); // Adiciona na memória

  return NextResponse.json(newEvent, { status: 201 });
}