import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const contentSlice = createSlice({
  name: 'layout',
  initialState: {
    evidence: [] as boolean[],
  },
  reducers: {
    addEvidence: (s, a: PayloadAction<boolean>) => {
      s.evidence.push(a.payload)
    }
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer


