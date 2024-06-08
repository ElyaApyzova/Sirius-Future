interface ITimetable {
    id: number
    title: string
    body: string
  }
  
  type TimetableState = {
    timetables: ITimetable[]
  }
  
  type TimetableAction = {
    type: string
    timetable: ITimetable
  }
  
  type DispatchType = (args: TimetableAction) => TimetableAction