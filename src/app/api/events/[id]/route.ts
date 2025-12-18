import { NextResponse } from "next/server";
import { events } from "@/data/events";

// GET: Busca um só
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return NextResponse.json({ message: "Evento não encontrado" }, { status: 404 });
  }

  return NextResponse.json(event);
}

// DELETE: Apaga (Isso resolve o erro 404 se o evento existir) 👇
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = events.findIndex((e) => e.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ message: "Evento não encontrado" }, { status: 404 });
  }

  events.splice(index, 1);
  return NextResponse.json({ message: "Deletado com sucesso" });
}