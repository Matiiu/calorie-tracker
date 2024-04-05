import { useActivity } from "../hooks/useActivity";

export default function Header() {
  const { dispatch, activitiesAreEmpty } = useActivity();

  const handleRestart = () => {
    const confirmCancel = window.confirm(
      "¿Está seguro de que sea eliminar todas las actividades registradas?"
    );

    if (confirmCancel) {
      dispatch({ type: "restart-app" });
      window.location.reload();
    }
  };

  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contado de Calorìas
        </h1>

        <button
          className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
          disabled={activitiesAreEmpty}
          onClick={handleRestart}
        >
          Reiniciar App
        </button>
      </div>
    </header>
  );
}
