import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export interface Todo{
    id: string;
    title: string;
    done: boolean;
}

interface TaskState{
    tasks:Todo[];
}

const initialState: TaskState = {
    tasks:[{
        id: uniqid(),
        title: 'Learn Redux toolkit',
        done: false
    }],
}

export const tasksSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ name: string }>) =>{
            state.tasks.push({
                id: uniqid(),
                title: action.payload.name,
                done: false
            });
        },
    },
});

export default tasksSlice.reducer;
export const { addTodo } = tasksSlice.actions;
