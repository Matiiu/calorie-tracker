import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { categories } from "../data/categories";
import type { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

export default function Form({ dispatch, state }: FormProps) {
  const initialState: Activity = {
    id: uuid(),
    category: 1,
    activityName: "",
    calories: 0,
  };

  // Convertimos las calorías en un objeto donde el id en la llave y el nombre el valor
  const categoriesObject = categories.reduce(
    (accumulator: Record<number, string>, current) => {
      accumulator[current.id] = current.name;
      return accumulator;
    },
    {}
  );

  const [activity, setActivity] = useState<Activity>({ ...initialState });

  useEffect(() => {
    if (state.activeId) {
      console.log('Ya hay algo =) ', state.activeId)
    }
  }, [state.activeId]);

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
    // Accedemos a la posición llave de nuestro objeto categoriesObject con el valor de activity.category y retornamos el valor
    return `Guardar ${categoriesObject[activity.category]}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "save-activity",
      payload: { newActivity: activity },
    });
    // Limpiar el formulario una vez enviado
    setActivity({ ...initialState });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
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
        value={nameSubmit()}
        disabled={!isValidateActivity()}
      />
    </form>
  );
}
