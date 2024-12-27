"use client";
import { useEffect, useState } from "react";
import { getCatalog } from "@/services/getCatalog";
import { Game, availableFilters } from "@/utils/endpoint";
import { GamesList, Button, Filter } from "@/components";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";

const Catalog = () => {
  const { genre } = useStore(
    useShallow((state) => ({
      genre: state.genre,

    }))
  );

  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchGames = async (reset = false) => {
    const data = await getCatalog(genre, reset ? 1 : page);
    if (data) {
      setGames((prevGames) => (reset ? data.games : [...prevGames, ...data.games]));
      setTotalPages(data.totalPages);
    }
  };

  useEffect(() => {
    fetchGames(page === 1);
  }, [genre, page]);

  useEffect(() => {
    setPage(1); 
    setGames([]);
  }, [genre]);

  const onClickSeeMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="home">
      <div className="home__head">
        <div className="head__title">
          <h1 className="title">Top Sellers</h1>
        </div>
        <div className="head__filter">
          <Filter options={availableFilters} />
        </div>
      </div>
      <hr className="home__line" />
      <div className="home__content">
        <GamesList games={games} />
        <div>
          {page < totalPages && (
            <Button label="SEE MORE" handleClick={() => onClickSeeMore()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
