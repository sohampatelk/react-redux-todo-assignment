//define interfaces for task
export interface Task {
  id: number
  taskDetail: string
}

//interface for taskList inventory state
export interface TaskListState {
  taskList: Task[]
}

//define action strings
export const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST'
export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST'

//define action requirements
interface RemoveTaskFromList {
  type: typeof REMOVE_TASK_FROM_LIST
  payload: number // this will mathch our Item ID
}

//add task to list 
interface AddTaskToList {
  type: typeof ADD_TASK_TO_LIST
  payload: Task //we need to pass a new Item that should be added to out store.
}

//Define action types inclide add and remove list
export type TodoActionTypes = RemoveTaskFromList | AddTaskToList;