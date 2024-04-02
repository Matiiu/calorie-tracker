import { useState, ChangeEvent } from "react";
import { categories } from "../data/categories";
import type { Activity } from "../types";

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    activityName: "",
    calories: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Validamos si es un campo numérico
    const isNumberFiled = ["category", "calories"].includes(e.target.id);
    // Si lo es convertimos el dato a numérico
    setActivity({
      ...activity,
      [e.target.id]: isNumberFiled ? +e.target.value : e.target.value,
    });
  };

  const isValidateActivity = () => {
    const { activityName, calories } = activity;
    // Validamos que el campo actividad y calorías estén diligenciados
    return !!(activityName || "").trim() && calories > 0;
  };

  const nameSubmit = () => {
    // Convertimos las calorías en un objeto donde el id en la llave y el nombre el valor
    const categoriesObject = categories.reduce(
      (accumulator: Record<number, string>, current) => {
        accumulator[current.id] = current.name;
        return accumulator;
      },
      {}
    );
    // Accedemos a la posición llave de nuestro objeto categoriesObject con el valor de activity.category y retornamos el valor
    return categoriesObject[activity.category];
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categorìa:</label>
        <select
          name="category"
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activityName">Actividad</label>
        <input
          id="activityName"
          name="activityName"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.activityName}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Calorias</label>
        <input
          id="calories"
          name="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300 o 500"
          min={0}
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white cursor-pointer disabled:opacity-10 disabled:cursor-auto"
        value={`Guardar ${nameSubmit()}`}
        disabled={!isValidateActivity()}
      />
    </form>
  );
}
