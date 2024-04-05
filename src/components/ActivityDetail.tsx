import type { Activity } from "../types";
import { useActivity } from "../hooks/useActivity";

import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

type ActivityDetailProps = {
  activity: Activity;
};
export default function ActivityDetail({ activity }: ActivityDetailProps) {
  const { dispatch, categoryName } = useActivity();

  const handleRemove = (id: Activity["id"]) => {
    const cancelConfirmation = window.confirm(
      "¿Estás seguro de que deseas eliminar la actividad?"
    );

    if (cancelConfirmation) {
      dispatch({ type: "delete-activity", payload: { id } });
    }
  };

  return (
    <div className="px-5 py-10 bg-white shadow-lg rounded-lg mt-5 flex justify-between">
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
  );
}
