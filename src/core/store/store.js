import { configureStore } from '@reduxjs/toolkit'
import { userReducer, managerOfferReducer } from './reducers'

export default configureStore({
  reducer: {
    user: userReducer,
    managerOffer: managerOfferReducer,
  },
})
