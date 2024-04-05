import { useContext } from "react";
import { ActivityContext } from "../contexts/ActivityContext";

export function useActivity() {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error(
      "El Hook useActivity debe ser utilizado en un ActivityProvider"
    );
  }

  return context;
}
