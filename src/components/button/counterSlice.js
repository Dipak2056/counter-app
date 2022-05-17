import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};
const counterSlice = createSlice({
  //step-1, that splits out 2 things
  //createSlice must have these 3 arguments
  name: "counter",
  initialState,
  reducers: {
    //they update the state
    increaseCount: (state, action) => {
      //these are two things they always receive
      state.count = state.count + 1; //these operation increaset the value by 1
    },
    decreaseCount: (state, action) => {
      //these are two things they always receive
      state.count = state.count - 1; //these operation increaset the value by 1
    },
  },
});

const { reducer, actions } = counterSlice; //step-2 it is emmitting reducer and actions

export const { increaseCount, decreaseCount } = actions; //to make it available in component
export default reducer; // to make it available in store
