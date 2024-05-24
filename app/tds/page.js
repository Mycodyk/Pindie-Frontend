"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function TDS() {
  const tdsGame = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className="main-inner">
      {tdsGame ? (
        <CardsList id="tds" title="TDS" data={tdsGame} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
