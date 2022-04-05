import { createSlice, createStore } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += 1
    },
    decrease: (state, action) => {
      state.value -= 1
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

export default store
