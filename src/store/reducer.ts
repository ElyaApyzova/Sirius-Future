import * as actionTypes from "../store/actionTypes"

const initialState: TimetableState = {
    timetables: [
        {
            id: 1,
            title: "",
            body: "",
        },
        {
            id: 1,
            title: "",
            body: "",
        },
    ],
}


const reducer = (
    state: TimetableState = initialState,
    action: TimetableAction
): TimetableState => {
    switch (action.type) {
        case actionTypes.ADD_TIMETABLE:
            const newTimetable: ITimetable = {
                id: Math.random(), // not really unique
                title: action.timetable.title,
                body: action.timetable.body,
            }
            return {
                ...state,
                timetables: state.timetables.concat(newTimetable),
            }
            case actionTypes.REMOVE_TIMETABLE:
                const updatedTimetables: ITimetable[] = state.timetables.filter(
                    timetable => timetable.id !== action.timetable.id
                )
                return {
                    ...state,
                    timetables: updatedTimetables,
                }
            }
            return state
    
}

export default reducer
