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

      <div className="flex flex-col items-center"></div>  
      <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        {caloriesCosumed}
      </p>
    </>
  );
}
