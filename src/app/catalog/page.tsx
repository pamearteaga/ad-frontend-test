'use client';
import { useEffect, useState } from "react";
import { getCatalog } from "@/services/getCatalog";
import { Game } from "@/utils/endpoint";
import { GamesList } from "@/components";
import { useStore } from '@/store/useStore';
import { useShallow } from 'zustand/shallow';

const Catalog = () => {
  const { genre, setGenre } = useStore(
      useShallow((state) => ({
        genre: state.genre,
        setGenre: state.setGenre
      }))
    );
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1); // for filter
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    const fetchGames = async () => {
      const data = await getCatalog(genre, page);
      console.log("CATALOG", data)
      setGames([...games, ...data.games]);
      setTotalPages(data.totalPages);
    };
    fetchGames();
  }, [genre, page]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl text-blue-600">
      <h1>HOME</h1>
      <GamesList games={games} />
      {page < totalPages && (
        <button onClick={() => setPage(page + 1)} className="see-more">
          See More
        </button>
      )}
    </main>
  );
};

export default Catalog;