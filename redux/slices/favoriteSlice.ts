import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Content } from '../../types'


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: {} as { [key: string]: Content }
  },
  reducers: {
    setItem: (s, a: PayloadAction<Content>) => {
      s.items[a.payload.title] = a.payload
    },
    removeItem: (s, a: PayloadAction<string>) => {
      delete s.items[a.payload]
    }
  }
})

export const favoriteActions = favoriteSlice.actions

export const favoriteReducer = favoriteSlice.reducer


