import { RootState } from "../../store";
import { Todo } from "./todoSlice";

export const selectTodoList = (state:RootState): Todo[] => state.task.tasks;
