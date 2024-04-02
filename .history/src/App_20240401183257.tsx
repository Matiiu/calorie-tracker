import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";

import { activityReducer, initialState } from "./reducers/activityReducer";
export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    if (state.activities.length > 0) {
      localStorage.setItem('activities', JSON.stringify(state.activities));
    }
  } ,[state.activities]);

  return (
    <>
      <Header state={state} dispatch={dispatch} />

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="mx-auto max-w-4xl">
          <ActivityList
            activities={state.activities}
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  );
}
