import { Activity } from "../types";

type ActivityListprops = {
    activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListprops) {
  console.log(activities);
  return (
    <>
      <h2 className="text-4-xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities}
    </>
  );
}
