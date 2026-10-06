import { createContext, Dispatch, useReducer } from "react";
import { ReactNode } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";


type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({children: chilrden}: ActivityProviderProps ) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <ActivityContext.Provider value={{
            dispatch,
            state
        }}>
            {chilrden}
        </ActivityContext.Provider>
    )
}