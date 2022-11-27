import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Evidence } from '../../types/evidence'


const contentSlice = createSlice({
  name: 'layout',
  initialState: {
    evidence: [] as Evidence[],
  },
  reducers: {
    addEvidence: (s, a: PayloadAction<Evidence>) => {
      s.evidence.push(a.payload)
    },
    removeEvidence: (s, a: PayloadAction<number>) => {
      s.evidence = s.evidence.filter((_, i) => i !== a.payload)
    },
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer


