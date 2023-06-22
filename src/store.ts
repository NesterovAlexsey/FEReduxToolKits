import authReducer from "./features/auth/authSlice";
import counterReducer from "./features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { tasksSlice } from "./features/todos/todoSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        task:tasksSlice.reducer
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch