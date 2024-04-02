import type { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: {
    newActivity: Activity;
  };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export function activityReducer(
  state: ActivityState = initialState,
  action: ActivityActions
) {}
