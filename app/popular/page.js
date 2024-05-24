"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardListSection/CardsListSection";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className="main-inner">
      {popularGames ? (
        <CardsListSection id="popular" title="Популярное" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
