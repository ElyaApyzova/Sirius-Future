import * as actionTypes from "../store/actionTypes"

export function addTimetable(timetable: ITimetable) {
    const action: TimetableAction = {
        type: actionTypes.ADD_TIMETABLE,
        timetable,
    }

    return simulateHttpRequest(action)
}

export function removeTimetable(timetable: ITimetable) {
    const action: TimetableAction = {
        type: actionTypes.REMOVE_TIMETABLE,
        timetable,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TimetableAction) {
   return (dispatch: DispatchType) => {
    setTimeout(() => {
        dispatch(action)
    }, 500)
   } 
}