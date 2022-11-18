import { createSlice } from "@reduxjs/toolkit";

export const counters = createSlice({
  name: "counter",
  initialState: {
    value: [0]
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state > 0) {
        state.value = 0;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counters.actions;
export default counters.reducer;
