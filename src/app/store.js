import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      serializableCheck: false,
    }),
    reducer: {
        user: userReducer
    }
})
