import * as actionTypes from "../store/actionTypes"

export function addTimetable(timetable: ITimetable) {
    const action: TimetableAction = {
        type: actionTypes.ADD_TIMETABLE,
        timetable,
    }

    return simulateHttpRequest(action)
}