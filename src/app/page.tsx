import { getEvents } from "@/services/events";
import SearchEvents from "@/components/SearchEvents";
import EventCard from "@/components/EventCard";
import Pagination from "@/components/Pagination"; // ✅ Importado
import { Event } from "@/types";

interface HomeProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  
  const query = searchParams.q;
  // 1. Pega o número da página (ou usa 1 como padrão)
  const page = Number(searchParams.page) || 1; 

  // 2. Busca os dados paginados (Agora desestruturamos o retorno)
  // 'events' recebe o array de dados, e 'totalPages' o número de páginas
  const { data: events, totalPages } = await getEvents(query, page);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          Próximos Eventos
        </h2>
        <SearchEvents />
      </section>

      {events.length === 0 ? (
        <div className="text-center text-slate-500 py-10">
          Nenhum evento encontrado para "{query}".
        </div>
      ) : (
        <>
          {/* Grid de Eventos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* 3. Adiciona a Paginação aqui no final 👇 */}
          <Pagination page={page} totalPages={totalPages} query={query} />
        </>
      )}
    </div>
  );
}