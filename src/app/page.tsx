import { getEvents } from "@/services/events";
import SearchEvents from "@/components/SearchEvents";


interface HomeProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Home(props: HomeProps) {
  // 1. Aguarda os parâmetros da URL
  const searchParams = await props.searchParams;
  const query = searchParams.q;

  // 2. Busca os eventos filtrados
  const events = await getEvents(query);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          Próximos Eventos
        </h2>
        {/* Adiciona a barra de busca aqui */}
        <SearchEvents />
      </section>

      {/* Se não achar nada, mostra mensagem amigável */}
      {events.length === 0 ? (
        <div className="text-center text-slate-500 py-10">
          Nenhum evento encontrado para "{query}".
        </div>
      ) : (
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
      )}
    </div>
  );
}