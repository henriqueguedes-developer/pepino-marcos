import Link from "next/link";
import { Event } from "@/types";
import DeleteButton from "./DeleteButton";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
          {event.category}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-900">
        {event.title}
      </h3>
      <p className="text-sm text-slate-500">{event.location}</p>
      <p className="text-sm text-slate-500">📅 {event.date}</p>

      {/* Área de Ações */}
      <div className="mt-auto pt-4 flex gap-2">
        {/* Botão Ver Detalhes (Ocupa o espaço que sobrar com flex-1) */}
        <Link 
          href={`/events/${event.id}`} 
          className="flex-1 rounded bg-slate-900 py-2 text-center text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Ver Detalhes
        </Link>

        {/* Botão de Deletar (Fica ao lado) */}
        <DeleteButton eventId={event.id} />
      </div>
    </div>
  );
}