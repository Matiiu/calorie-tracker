import type { Activity } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activeId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

const initialActivities = () => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
  activities: initialActivities(),
  activeId: "",
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

  return state;
}
