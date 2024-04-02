import { Activity } from "../types";

type ActivityListprops = {
    activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListprops) {
  return (
    <>
      <h2 className="text-4-xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity) => (
        <div 
            key={activity.id} 
            className="px-5 py-10 bg-white mt-5 flex justify-between"
        >

        </div>
      ))}
    </>
  );
}
