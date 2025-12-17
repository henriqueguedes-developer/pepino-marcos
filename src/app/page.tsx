import { getEvents } from "@/services/events"; // Importa do serviço novo

export default async function Home() {
  const events = await getEvents(); // Chamada limpa

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          Próximos Eventos
        </h2>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
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

            <div className="mt-auto pt-4">
              <a 
                href={`/events/${event.id}`} 
                className="block w-full rounded bg-slate-900 py-2 text-center text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Ver Detalhes
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}