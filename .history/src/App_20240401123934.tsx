import { useReducer } from "react";

import Header from "./components/Header";
import Form from "./components/Form";

import { activityReducer, initialState } from "./reducers/activityReducer";
export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

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

      </section>
    </>
  );
}
