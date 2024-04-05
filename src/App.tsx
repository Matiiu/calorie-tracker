import { useEffect } from "react";
import { useActivity } from "./hooks/useActivity";

import Header from "./components/Header";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import CaloriesTracker from "./components/CaloriesTracker";
import FilterByCategory from "./components/FilterByCategory";

export default function App() {
  const { state, activitiesAreEmpty } = useActivity();

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <>
      <Header />

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-gray-800 p-10">
        <div className="max-w-4xl mx-auto">
          <CaloriesTracker />
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {!activitiesAreEmpty && <FilterByCategory />}
          <ActivityList />
        </div>
      </section>
    </>
  );
}
