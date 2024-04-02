import { Activity } from "../types";

type CaloriesTrackerProps = {
  activities: Activity[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  console.log(activities);
  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">
            Resumen de Calorias
        </h2>
    </>
  );
}
