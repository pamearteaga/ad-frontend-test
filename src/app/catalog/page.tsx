"use client";
import { useEffect, useState } from "react";
import { getCatalog } from "@/services/getCatalog";
import { Game } from "@/utils/endpoint";
import { GamesList } from "@/components";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";

const Catalog = () => {
  const { genre, setGenre } = useStore(
    useShallow((state) => ({
      genre: state.genre,
      setGenre: state.setGenre,
    }))
  );
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1); // for filter
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getCatalog(genre, page);
      console.log("CATALOG", data);
      setGames([...games, ...data.games]);
      setTotalPages(data.totalPages);
    };
    fetchGames();
  }, [genre, page]);

  return (
    <div className="home">
      <div className="home__head">
        <h1 className="title">Top Sellers</h1>
        <div>
          <label htmlFor="genre"> Genre</label>
          <select name="genre" id="">
            <option value="">genre</option>
          </select>
        </div>
      </div>
      <br></br>
      <div className="home__content">
        <GamesList games={games} />
        <div>
          {page < totalPages && (
            <button onClick={() => setPage(page + 1)} className="see-more">
              See More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
