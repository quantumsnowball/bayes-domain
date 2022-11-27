import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const contentSlice = createSlice({
  name: 'layout',
  initialState: {
    evidence: [] as boolean[],
  },
  reducers: {
    addEvidence: (s, a: PayloadAction<boolean>) => {
      s.evidence.push(a.payload)
    },
    removeEvidence: (s, a: PayloadAction<number>) => {
      s.evidence = s.evidence.filter((_, i) => i !== a.payload)
    },
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer


