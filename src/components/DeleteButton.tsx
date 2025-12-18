"use client";

import { deleteEvent } from "@/services/events";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ eventId }: { eventId: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = confirm("Tem certeza que deseja excluir este evento?");
    if (!confirmed) return;

    setLoading(true);
    try {
      await deleteEvent(eventId);
      router.refresh();
      // Se estiver na home, o refresh já atualiza a lista.
      // Se estiver na página de detalhes, o push joga pra home.
      router.push("/"); 
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      // 👇 Mudei para classes menores (text-sm, py-2) para caber no card
      className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:bg-red-300"
    >
      {loading ? "..." : "Excluir"}
    </button>
  );
}