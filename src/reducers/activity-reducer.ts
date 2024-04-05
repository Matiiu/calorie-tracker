import type { Activity, Category } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activeId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } }
  | { type: "restart-app" }
  | { type: "get-category-to-filter"; payload: { category: Category["id"] } };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
  categoryToFilter: Category["id"];
};

function localStorageactivities(): Activity[] {
  const activities = localStorage.getItem("activities");
  return activities ? JSON.parse(activities) : [];
}

export const initialState: ActivityState = {
  activities: localStorageactivities(),
  activeId: "",
  categoryToFilter: 0,
};

export function activityReducer(
  state: ActivityState = initialState,
  action: ActivityActions
) {
  if (action.type === "save-activity") {
    let updateActivities: Activity[] = [];
    if (state.activeId) {
      updateActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      updateActivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updateActivities,
      activeId: "",
    };
  }

  if (action.type === "set-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      ),
    };
  }

  if (action.type === "restart-app") {
    // Removemos la llave de nuestro stroage
    localStorage.removeItem("activities");
    // Limpiamos todos los valores
    return {
      activities: [],
      activeId: "",
      categoryToFilter: 0,
    };
  }

  if (action.type === "get-category-to-filter") {
    return {
      ...state,
      categoryToFilter: action.payload.category,
    };
  }

  return state;
}
