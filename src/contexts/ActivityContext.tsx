import { createContext, ReactNode, useReducer, Dispatch, useMemo } from "react";
import {
  activityReducer,
  initialState,
  ActivityState,
  ActivityActions,
} from "../reducers/activity-reducer";

import type { Activity } from "../types";

import { categories } from "../data/categories";

type ActivityProviderPorps = {
  children: ReactNode;
};

type ActivityContextProps = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
  caloriesCosumed: number;
  caloriesBurned: number;
  netCalories: number;
  categoryName: (category: Activity["category"]) => string;
  activitiesAreEmpty: boolean;
};

export const ActivityContext = createContext<ActivityContextProps>(null!);

export function ActivityProvider({ children }: ActivityProviderPorps) {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  // Contadores
  const caloriesCosumed = useMemo(
    () =>
      state.activities.reduce(
        (total, curr) => (curr.category === 1 ? total + curr.calories : total),
        0
      ),
    [state.activities]
  );
  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, curr) => (curr.category === 2 ? total + curr.calories : total),
        0
      ),
    [state.activities]
  );
  const netCalories = useMemo(
    () => caloriesCosumed - caloriesBurned,
    [state.activities]
  );

  const categoryName = useMemo(
    () => (category: Activity["category"]) => {
      const foundCategory = categories.find(
        (currCat) => currCat.id === category
      );
      return foundCategory ? foundCategory.name : "";
    },
    [state.activities]
  );

  const activitiesAreEmpty = useMemo(
    () => !state.activities.length,
    [state.activities]
  );

  return (
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
        caloriesCosumed,
        caloriesBurned,
        netCalories,
        categoryName,
        activitiesAreEmpty,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}
