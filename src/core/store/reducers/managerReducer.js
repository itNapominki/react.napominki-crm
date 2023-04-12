import { createSlice } from '@reduxjs/toolkit'

const managerSlice = createSlice({
  name: 'manager',
  initialState: {
    value: null,
  },
  reducers: {
    setManager: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setManager } = managerSlice.actions

export default managerSlice.reducer
