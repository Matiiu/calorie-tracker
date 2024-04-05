import { useActivity } from "../hooks/useActivity";

import ActivityDetail from "./ActivityDetail";

export default function ActivityList() {
  const { state, activitiesAreEmpty } = useActivity();

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activitiesAreEmpty ? (
        <p className="text-center py-6 mt-5 text-lg">
          No Hay Actividades Aún..
        </p>
      ) : (
        state.activities.map((activity) => (
          <ActivityDetail key={activity.id} activity={activity} />
        ))
      )}
    </>
  );
}
