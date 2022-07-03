import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increamentCounter: (state, action) => {
      state.count = state.count + 1;
    },

    decreamentCounter: (state, action) => {
      state.count = state.count - 1;
    },

    resetCounter: (state, action) => {
      state.count = 0;
    },
  },
});

export default counterSlice.reducer;

export const { increamentCounter, decreamentCounter, resetCounter } =
  counterSlice.actions;
