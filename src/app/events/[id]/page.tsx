import { getEventById } from "@/services/events";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EventDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetails({ params }: EventDetailsProps) {
  // 1. Desembrulha os parâmetros da URL (Next 15 exigência)
  const { id } = await params;

  // 2. Busca o evento pelo ID (convertendo string para number)
  const event = await getEventById(Number(id));

  // 3. Se não achar (ex: /events/999), joga para a página 404 padrão
  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Botão Voltar */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          &larr; Voltar para listagem
        </Link>
      </div>

      {/* Cabeçalho do Evento */}
      <div className="mb-8 rounded-xl bg-slate-900 p-8 text-white shadow-lg">
        <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">
          {event.category}
        </span>
        <h1 className="mb-4 text-3xl font-extrabold">{event.title}</h1>
        <div className="flex flex-col gap-2 text-slate-300 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            📅 {event.date}
          </span>
          <span className="flex items-center gap-2">
            📍 {event.location}
          </span>
        </div>
      </div>

      {/* Detalhes / Descrição (Placeholder, já que nosso mock é simples) */}
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Sobre o evento</h2>
        <p className="leading-relaxed text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat.
        </p>
        
        <div className="mt-8 border-t border-slate-100 pt-6">
           <button className="w-full rounded bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700 sm:w-auto sm:px-8">
             Inscrever-se agora
           </button>
        </div>
      </div>
    </div>
  );
}