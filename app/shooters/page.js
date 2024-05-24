"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooter() {
  const shooterGame = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className="main-inner">
      {shooterGame ? (
        <CardsList id="shooter" title="Шутеры" data={shooterGame} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
