'use client';
import { useEffect, useState } from "react";
import { getCatalog } from "@/services/getCatalog";
import { Game } from "@/utils/endpoint";

const Catalog = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [genre, setGenre] = useState("all"); // for filter
  const [page, setPage] = useState(1);
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
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
      {page < totalPages && (
        <button onClick={() => setPage(page + 1)} className="see-more-btn">
          See More
        </button>
      )}
    </main>
  );
};

export default Catalog;