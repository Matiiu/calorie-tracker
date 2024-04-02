import { useReducer } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";

import { activityReducer, initialState } from "./reducers/activityReducer";
export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  console.log({state})

  return (
    <>
      <Header />

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList state={state} />
      </section>
    </>
  );
}
