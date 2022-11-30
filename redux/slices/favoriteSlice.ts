import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Content } from '../../types'


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [] as Content[]
  },
  reducers: {
    addFavoriteItem: (s, a: PayloadAction<Content>) => {
      s.items.push(a.payload)
    }
  }
})

export const favoriteActions = favoriteSlice.actions

export const favoriteReducer = favoriteSlice.reducer


