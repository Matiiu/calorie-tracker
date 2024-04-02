import { useMemo } from "react";
import { Activity } from "../types";

type CaloriesTrackerProps = {
  activities: Activity[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  // Contadores
  const caloriesCosumed = useMemo(
    () =>
      activities.reduce(
        (total, curr) => (curr.category === 1 ? total + curr.calories : total),
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, curr) => (curr.category === 2 ? total + curr.calories : total),
        0
      ),
    [activities]
  );
  console.log(caloriesCosumed);
  console.log(caloriesBurned);

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className="font-black text-6xl text-orange">
            {caloriesCosumed}
          </span>
          Consumidas
        </p>

        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className="font-black text-6xl text-orange">
            {caloriesCosumed}
          </span>
          Quemadas
        </p>
      </div>
    </>
  );
}
