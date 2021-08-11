import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  min: -8,
  max: 8,
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.max >= state.value + 1) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.min <= state.value - 1) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      console.log(state.max);
      if (state.max >= state.value + action.payload) {
        state.value += action.payload;
      }
    },
    incrementМultiply: (state, action) => {
      if (state.max > state.value + action.payload) {
        if (state.max >= state.value + action.payload) {
          state.value *= action.payload;
        }
      }
    },
    changeMin: (state, action) => {
      state.min = action.payload;
    },
    changeMax: (state, action) => {
      state.max = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementМultiply,
  changeMin,
  changeMax,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectMin = (state) => state.counter.min;
export const selectMax = (state) => state.counter.max;
console.log(counterSlice.actions);
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
