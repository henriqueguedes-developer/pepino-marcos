import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
  query?: string;
}

export default function Pagination({ page, totalPages, query }: PaginationProps) {
  // Se só tem 1 página, não mostra nada
  if (totalPages <= 1) return null;

  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPages ? page + 1 : totalPages;

  // Função para gerar a URL mantendo a busca (q) se existir
  const createUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    params.set("page", newPage.toString());
    return `/?${params.toString()}`;
  };

  return (
    // Se quiser esconder no mobile DE VERDADE, adicione "hidden md:flex" aqui.
    // Mas recomendo deixar "flex" para não bloquear usuários mobile.
    <div className="flex justify-center gap-4 mt-8">
      {/* Botão Anterior */}
      <Link
        href={createUrl(prevPage)}
        className={`rounded px-4 py-2 text-sm font-medium transition ${
          page <= 1
            ? "pointer-events-none bg-slate-100 text-slate-400"
            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
        }`}
        aria-disabled={page <= 1}
      >
        Anterior
      </Link>

      <span className="flex items-center text-sm text-slate-600">
        Página {page} de {totalPages}
      </span>

      {/* Botão Próximo */}
      <Link
        href={createUrl(nextPage)}
        className={`rounded px-4 py-2 text-sm font-medium transition ${
          page >= totalPages
            ? "pointer-events-none bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
        aria-disabled={page >= totalPages}
      >
        Próximo
      </Link>
    </div>
  );
}