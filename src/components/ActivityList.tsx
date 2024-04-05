import { useActivity } from "../hooks/useActivity";

import ActivityDetail from "./ActivityDetail";

export default function ActivityList() {
  const { state, activitiesAreEmpty } = useActivity();

  const activitiesFilter =
    state.categoryToFilter > 0
      ? state.activities.filter(
          (activity) => activity.category === state.categoryToFilter
        )
      : state.activities;

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activitiesAreEmpty || activitiesFilter.length === 0 ? (
        <p className="text-center py-6 mt-5 text-lg">
          No Hay Actividades Aún..
        </p>
      ) : (
        activitiesFilter.map((activity) => (
          <ActivityDetail key={activity.id} activity={activity} />
        ))
      )}
    </>
  );
}
