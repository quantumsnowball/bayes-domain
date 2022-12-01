import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer, persistStore,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './slices/themeSlice'
import { layoutReducer } from './slices/layoutSlice'
import { contentReducer } from './slices/contentSlice'
import { favoriteReducer } from './slices/favoriteSlice'


// reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  content: contentReducer,
  favorite: favoriteReducer
})

// store
export const store = configureStore({
  reducer: persistReducer({ key: 'root', storage, blacklist: [] }, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

// persistor
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

