import { Activity } from "../types"

type ActivityListprops = {
    state: Activity[]
}

export default function ActivityList({ state }: ActivityListprops) {
    console.log({state})
  return (
    <>
        <h2 className="text-4-xl font-bold text-slate-600 text-center">
            Comida y Actividades
        </h2>
    </>
  )
}
