import { Activity } from "../types";

type CaloriesTrackerProps = {
  activities: Activity[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  console.log(activities);
  return (
    <div>CaloriesTracker</div>
  );
}
