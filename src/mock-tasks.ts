import {Task} from "./app/models/Task"

export const MOCK_TASKS: Array<Task> = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "May 5th at 14:30",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "May 6th at 13:30",
    reminder: true
  },
  {
    id: 2,
    text: "Food Shopping",
    day: "May 7th at 09:00",
    reminder: false
  }
]
