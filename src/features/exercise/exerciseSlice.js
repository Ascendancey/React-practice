import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [
    {
      value: 0,
      exerciseid: "0",
      category: "Push",
      title: "1CT PAUSE BENCH PRESS",
      loadneed: 12,
      loaddone: 15,
      repsneed: 10,
      repsdone: 5,
      rpeneed: 8,
      rpedone: 10,
    },
    {
      value: 0,
      exerciseid: "1",
      category: "Push",
      title: "1CT PAUSE BENCH PRESS",
      loadneed: 2,
      loaddone: 5,
      repsneed: 0,
      repsdone: 15,
      rpeneed: 18,
      rpedone: 1,
    },
  ],
  reducers: {
    updateValue(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.exerciseid === newItem.exerciseid);
      const updType = newItem.type;
      existingItem[updType + 'done'] = Number(action.payload.event.target.value);
    },
  },
});

export const {
  updateValue,
} = counterSlice.actions;

export default counterSlice.reducer;
