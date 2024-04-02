import { useMemo } from "react";
import { Activity } from "../types";

type CaloriesTrackerProps = {
  activities: Activity[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  // Contadores
  const calories = useMemo(() => activities.reduce(
    (total, curr) => curr.category === 1 ? total + curr.calories : total, 0), 
    [activities]
  );
  console.log(calories);

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">
            Resumen de Calorias
        </h2>
    </>
  );
}
