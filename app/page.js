import { getNormalizedGamesDataByCategory } from "./api/api-utils";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardListSection/CardsList";
import { endpoints } from "./api/config";
import { CardsListSection } from "./components/CardListSection/CardsListSection";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );
  const newGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "new"
  );

  return (
    <main className="main">
      <Banner />
      <CardsListSection type="slider" id="new" title="Новинки" data={popularGames} />
      <CardsListSection type="slider" id="popular" title="Популярное" data={newGames} />
      <Promo />
    </main>
  );
}
