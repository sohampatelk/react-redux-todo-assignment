//import some interfaces from type.ts
import {
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST,
  TodoActionTypes,
  Task
} from "./types";

// remove task from list function
export function removeTaskFromList (id: number): TodoActionTypes {
  return {
    type: REMOVE_TASK_FROM_LIST,
    payload: id
  }
}

// this add task to list....
export function addTaskToList (task: Task): TodoActionTypes {
  return {
    type: ADD_TASK_TO_LIST,
    payload: task
  }
}
