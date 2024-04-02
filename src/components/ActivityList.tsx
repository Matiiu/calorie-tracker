import { Dispatch, useMemo } from "react";

import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

import type { Activity, Category } from "../types";
import { categories } from "../data/categories";
import { ActivityActions } from "../reducers/activityReducer";

type ActivityListprops = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({
  activities,
  dispatch,
}: ActivityListprops) {
  // Convertimos las calorías en un objeto donde el id en la llave y el nombre el valor
  const categoriesObject = categories.reduce(
    (accumulator: Record<Category["id"], Category["name"]>, current) => {
      accumulator[current.id] = current.name;
      return accumulator;
    },
    {}
  );

  const activitiesAreEmpty = useMemo(() => !activities.length, [activities]);

  const categoryName = (id: Category["id"]) => {
    // Accedemos a la posición llave de nuestro objeto categoriesObject con el valor de activity.category y retornamos el valor
    return categoriesObject[id];
  };

  const handleRemove = (id: Activity["id"]) => {
    const cancelConfirmation = window.confirm(
      "¿Estás seguro de que deseas eliminar la actividad?"
    );

    if (cancelConfirmation) {
      dispatch({ type: "delete-activity", payload: { id } });
    }
  };

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
        activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                  activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                }`}
              >
                {categoryName(activity.category)}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.activityName}</p>
              <p className="font-black text-4xl text-lime-500">
                {" "}
                {activity.calories}
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <button
                onClick={() =>
                  dispatch({
                    type: "set-activeId",
                    payload: { id: activity.id },
                  })
                }
              >
                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
              </button>

              <button onClick={() => handleRemove(activity.id)}>
                <XCircleIcon className="h-8 w-8 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
