import { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon } from '@heroicons/react/24/outline';

type ActivityListprops = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListprops) {
  // Convertimos las calorías en un objeto donde el id en la llave y el nombre el valor
  const categoriesObject = categories.reduce(
    (accumulator: Record<number, string>, current) => {
      accumulator[current.id] = current.name;
      return accumulator;
    },
    {}
  );

  const categoryName = (activityId: number) => {
    // Accedemos a la posición llave de nuestro objeto categoriesObject con el valor de activity.category y retornamos el valor
    return categoriesObject[activityId];
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-16 bg-white mt-5 flex justify-between"
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
            <button>
                <PencilSquareIcon
                    className="h-8 w-8 text-gray-800"
                />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
