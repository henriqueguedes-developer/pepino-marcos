import { NextResponse } from "next/server";
import { events } from "@/data/events"; // Importa o mesmo banco

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Tipagem correta do Next 15
) {
  const { id } = await params; // Aguarda o parametro

  // Busca no array
  const event = events.find((e) => e.id === Number(id));

  // Se não achar, retorna 404
  if (!event) {
    return NextResponse.json({ message: "Evento não encontrado" }, { status: 404 });
  }

  return NextResponse.json(event);
}
// ADICIONANDO DELETE
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