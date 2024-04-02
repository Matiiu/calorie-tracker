import { useMemo } from "react";
import { ActivityState } from "../reducers/activityReducer";

type HeaderProps = {
  state: ActivityState;
};

export default function Header({ state }: HeaderProps) {

  const isEmpty = useMemo(() => !state.activities.length, [state.activities]);
  console.log(isEmpty)

  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contado de Calorìas
        </h1>

        <button 
          className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
          disabled={isEmpty}
          >
          Reiniciar App
        </button>
      </div>
    </header>
  );
}
