import { GET } from "@/app/api/games/route";
import { Game, allGames } from "../utils/endpoint"

type CatalogType = { 
  games: Game[]; 
  totalPages: number;
};

export const getCatalog = async (genre: string, page: number): Promise<CatalogType> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const ITEMS_PER_PAGE = 12;

  if (apiUrl === "local") {
    let filteredGames = allGames;
    if (genre && genre !== "all") {
      filteredGames = allGames.filter(
        (game) => game.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    const fromIndex = (page - 1) * ITEMS_PER_PAGE;
    const toIndex = page * ITEMS_PER_PAGE;
    const games = filteredGames.slice(fromIndex, toIndex);
    const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);

    /* const response = await GET(new Request(`?genre=${genre}&page=${page}`));
    const data = await response.json();
 */
    return {
      games,
      totalPages,
    };
  }

  const response = await GET(new Request(`?genre=${genre}&page=${page}`));
  const data = await response.json();

  return {
    games: data.games,
    totalPages: data.totalPages,
  };
};

