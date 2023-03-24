import { createSlice } from '@reduxjs/toolkit'
import { OBJECT_TYPES } from 'core/constants'

const managerOfferSlice = createSlice({
  name: 'managerOffer',
  initialState: {
    value: {
      objectTypes: Object.keys(OBJECT_TYPES),
    },
  },
  reducers: {
    filterObjectTypes: (state, action) => {
      state.value.objectTypes =
        state.value.objectTypes.indexOf(action.payload) !== -1
          ? state.value.objectTypes.filter(
              (objectType) => objectType !== action.payload
            )
          : [...state.value.objectTypes, action.payload]
    },
  },
})

export const { filterObjectTypes } = managerOfferSlice.actions

export default managerOfferSlice.reducer
