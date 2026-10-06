import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context) {
        throw new Error('El hook useActivity debe de ser utilizado en un Activiti provider')
    }
    return context
}