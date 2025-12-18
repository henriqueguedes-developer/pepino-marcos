import { NextResponse } from "next/server";
import { events } from "@/data/events";
import { Event } from "@/types";

// GET: Lista com Paginação
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const query = searchParams.get("q")?.toLowerCase() || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(query) ||
      event.category.toLowerCase().includes(query)
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedEvents,
    total: filteredEvents.length,
    page,
    totalPages: Math.ceil(filteredEvents.length / limit),
  });
}

// POST: Criação de Evento (Isso resolve o erro 405) 👇
export async function POST(request: Request) {
  const body = await request.json();

  const newEvent: Event = {
    id: events.length + 1, // Gera ID simples
    ...body,
  };

  events.push(newEvent);

  return NextResponse.json(newEvent, { status: 201 });
}