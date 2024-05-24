"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function pixelGames() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main className="main-inner">
      {pixelGames ? (
        <CardsList id="popular" title="Популярное" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
