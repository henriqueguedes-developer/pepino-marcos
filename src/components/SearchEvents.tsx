"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchEvents() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-6">
      <label htmlFor="search" className="sr-only">
        Buscar eventos
      </label>
      <input
        id="search"
        type="text"
        placeholder="Buscar evento por nome ou categoria..."
        // 👇 A MÁGICA TÁ NESSA LINHA ABAIXO (Classes atualizadas)
        className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}