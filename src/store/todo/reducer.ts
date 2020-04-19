import {
  TaskListState,
  TodoActionTypes,
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST,
} from "./types";

//set up default or "initial" state for todo list
const initialState: TaskListState = {
  taskList: [
    {
      id: 1,
      taskDetail: "To do Laundry",
    },
    {
      id: 2,
      taskDetail: "Clean Backyard",
    },
  ],
};

//here is todo reducer /functionality setup
export function todoReducer(state = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case REMOVE_TASK_FROM_LIST:
      return {
        ...state,
        //filter through,and return array without mathcing ID of task.
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    case ADD_TASK_TO_LIST:
      return {
        ...state,
        //add one new task into the end of our array !!
        taskList: [...state.taskList, action.payload],
      };

    default:
      return state;
  }
}
