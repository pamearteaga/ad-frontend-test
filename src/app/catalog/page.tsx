"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCatalog } from "@/services/getCatalog";
import { Game, availableFilters } from "@/utils/endpoint";
import { GamesList, Button, Filter } from "@/components";
import { urlFormat } from "@/utils/urlFormat";

const Catalog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre") || "all";
  const urlPage = parseInt(searchParams.get("page") || "1", 10);

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

  useEffect(() => {
    if (page !== urlPage) {
      setPage(urlPage);
    }
  }, [urlPage]);
  
  const onGenreChange = (newGenre: string) => {
    router.push(urlFormat(newGenre));
  };

  const onClickSeeMore = () => {
    if (page < totalPages) {
      router.push(urlFormat(genre, page + 1));
    }
  };

  return (
    <div className="home">
      <div className="home__head">
        <div className="head__title">
          <h1 className="title">Top Sellers</h1>
        </div>
        <div className="head__filter">
          <Filter
            options={availableFilters}
            selectedGenre={genre}
            handleOnChange={onGenreChange}
          />
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
