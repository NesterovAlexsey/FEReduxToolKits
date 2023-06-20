import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CounterState from "./types/CounterState";
import Color from "./types/Color";
import * as api from './api';

//slice = ActionType + actionCreators + reducer

const initialState: CounterState = {
    value: 0,
    color: "red"
}

export const changeColor = createAsyncThunk(
    'counter/changeColor',
    async (color: Color) => {
        await api.colorChange(color);
        return color;
    }
)

export const saveCounterValue = createAsyncThunk(
    'counter/saveValue',
    async (value: number) => {
        await api.save(value)
    }
)

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        minus(state, action: PayloadAction<number>) {
            state.value -= action.payload;
        },
        plus(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(changeColor.fulfilled, (state, action) => {
            const color = action.payload;
            state.color = color;
        })
    }
});

export const { minus, plus } = counterSlice.actions;

export default counterSlice.reducer
