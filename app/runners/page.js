"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function Runners() {
  const runnerGame = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className="main-inner">
      {runnerGame ? (
        <CardsList id="runner" title="Ранеры" data={runnerGame} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
