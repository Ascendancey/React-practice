import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [{
    value: 0,
    key: 0,
    category: "Push",
    title: "1CT PAUSE BENCH PRESS",
    loadneed: 12,
    loaddone: 15,
    repsneed: 10,
    repsdone: 5,
    rpeneed: 8,
    rpedone: 10,
  }, {
    value: 0,
    key: 1,
    category: "Push",
    title: "1CT PAUSE BENCH PRESS",
    loadneed: 2,
    loaddone: 5,
    repsneed: 0,
    repsdone: 15,
    rpeneed: 18,
    rpedone: 1,
  }],
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    newValue: (state, action) => {
      state[0].value = action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount, newValue } = counterSlice.actions

export default counterSlice.reducer