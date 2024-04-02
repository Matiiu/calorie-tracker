import type { Activity } from "../types";

export type ActivityActions =
  { type: "save-activity", payload: { newActivity: Activity }} |
  { type: "set-activeId", payload: { id: Activity["id"] }};

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export function activityReducer(
  state: ActivityState = initialState,
  action: ActivityActions
) {
  if (action.type === "save-activity") {

    if (state.activeId) {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity],
          };
    }
  }

  if (action.type === "set-activeId") {
    return {
        ...state,
        activeId: action.payload.id
    }
  }
  return state;
}
