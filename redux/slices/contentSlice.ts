import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Evidence } from '../../types/evidence'
import { Hypothesis } from '../../types/hypothesis'


const contentSlice = createSlice({
  name: 'layout',
  initialState: {
    hypothesis: {
      title: 'Untitled Hypothesis',
      prior: 0.5,
      priorText: '1/2',
    } as Hypothesis,
    evidence: [] as Evidence[],
  },
  reducers: {
    setHypothesisTitle: (s, a: PayloadAction<string>) => {
      s.hypothesis.title = a.payload
    },
    setHypothesisPrior: (s, a: PayloadAction<number>) => {
      s.hypothesis.prior = a.payload
    },
    setHypothesisPriorText: (s, a: PayloadAction<string>) => {
      s.hypothesis.priorText = a.payload
    },
    setEvidenceTitle: (s, a: PayloadAction<{ i: number, title: string }>) => {
      s.evidence[a.payload.i].title = a.payload.title
    },
    setEvidenceLikelihood: (s, a: PayloadAction<{ i: number, likelihood: number }>) => {
      s.evidence[a.payload.i].likelihood = a.payload.likelihood
    },
    setEvidenceLikelihoodText: (s, a: PayloadAction<{ i: number, likelihoodText: string }>) => {
      s.evidence[a.payload.i].likelihoodText = a.payload.likelihoodText
    },
    setEvidenceNormalizer: (s, a: PayloadAction<{ i: number, normalizer: number }>) => {
      s.evidence[a.payload.i].normalizer = a.payload.normalizer
    },
    setEvidenceNormalizerText: (s, a: PayloadAction<{ i: number, normalizerText: string }>) => {
      s.evidence[a.payload.i].normalizerText = a.payload.normalizerText
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


