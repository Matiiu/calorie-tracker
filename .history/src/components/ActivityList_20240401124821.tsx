import { Activity } from "../types"

type ActivityListprops = {
    acitivities: Activity[]
}

export default function ActivityList({ acitivities }: ActivityListprops) {
  return (
    <>
        <h2 className="text-4-xl font-bold text-slate-600 text-center">
            Comida y Actividades
        </h2>
    </>
  )
}
