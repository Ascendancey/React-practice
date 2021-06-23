import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/exercise/exerciseSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})