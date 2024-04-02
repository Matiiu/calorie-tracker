import { Activity } from "../types";
import { categories } from "../data/categories";

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
      <h2 className="text-4-xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity, i) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p>{i + 1}</p>
            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                {categoryName(activity.category)}
            </p>
            <p className="text-2xl font-bold">{activity.activityName}</p>
            <p className="font-black text-4xl text-lime-500">
              {" "}
              {activity.calories}
            </p>
          </div>

          <div>

          </div>
        </div>
      ))}
    </>
  );
}
