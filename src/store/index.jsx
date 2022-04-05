import { createSlice, createStore } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload
    },
    decrease: (state, action) => {
      state.value -= action.payload
    }
  }
})

// The Old Reducer
// const counterReducer = (state = initState, action) => {
//   if (action.type === 'increase') {
//     return { value: state.value + action.payload }
//   }
//   if (action.type === 'decrease') {
//     return { value: state.value - action.payload }
//   }
//   return state
// }

const store = createStore(counterSlice.reducer)
export const { increase, decrease } = counterSlice.actions

export default store
