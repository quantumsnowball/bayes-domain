import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CONTENT } from '../../constants/content'
import { Content } from '../../types'
import { Evidence } from '../../types/evidence'


const contentSlice = createSlice({
  name: 'content',
  initialState: DEFAULT_CONTENT,
  reducers: {
    setContent: (s, a: PayloadAction<Content>) => {
      s.title = a.payload.title
      s.hypothesis = a.payload.hypothesis
      s.evidence = a.payload.evidence
    },
    setTitle: (s, a: PayloadAction<string>) => {
      s.title = a.payload
    },
    setHypothesisTitle: (s, a: PayloadAction<string>) => {
      s.hypothesis.title = a.payload
    },
    setHypothesisPrior: (s, a: PayloadAction<number>) => {
      s.hypothesis.prior = a.payload
    },
    setHypothesisPriorText: (s, a: PayloadAction<string>) => {
      s.hypothesis.priorText = a.payload
    },
    setEvidenceTitle: (s, a: PayloadAction<{ i: number, txt: string }>) => {
      s.evidence[a.payload.i].title = a.payload.txt
    },
    setEvidenceLikelihood: (s, a: PayloadAction<{ i: number, val: number }>) => {
      s.evidence[a.payload.i].likelihood = a.payload.val
    },
    setEvidenceLikelihoodText: (s, a: PayloadAction<{ i: number, txt: string }>) => {
      s.evidence[a.payload.i].likelihoodText = a.payload.txt
    },
    setEvidenceNormalizer: (s, a: PayloadAction<{ i: number, val: number }>) => {
      s.evidence[a.payload.i].normalizer = a.payload.val
    },
    setEvidenceNormalizerText: (s, a: PayloadAction<{ i: number, txt: string }>) => {
      s.evidence[a.payload.i].normalizerText = a.payload.txt
    },
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


