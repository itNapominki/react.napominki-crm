import { configureStore } from '@reduxjs/toolkit'
import { userReducer, managerReducer } from './reducers'

export default configureStore({
  reducer: {
    user: userReducer,
    manager: managerReducer,
  },
})
