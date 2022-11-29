import {
  Chip,
  InputAdornment,
  Paper,
} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"
import PropTextField from "../share/ProbTextField"


interface NormalizerPromptProps {
  index: number
}

function NormalizerPrompt({ index }: NormalizerPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[index].title)
  const normalizer = useSelector((s: RootState) => s.content.evidence[index].normalizer)
  const normalizerText = useSelector((s: RootState) => s.content.evidence[index].normalizerText)
  const [normalizerLocal, setNormalizerLocal] = useState(normalizer)
  const [evalError, setEvalError] = useState(false)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <ProbSlider
        value={normalizerLocal}
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setNormalizerLocal(value)
        }}
        onChangeCommitted={e => {
          dispatch(contentActions.setEvidenceNormalizer({
            i: index,
            normalizer: normalizerLocal
          }))
          dispatch(contentActions.setEvidenceNormalizerText({
            i: index,
            normalizerText: normalizerLocal.toFixed(4)
          }))
        }}
      />
      <PropTextField
        error={evalError}
        label='Probability of seeing this evidence in general?'
        helperText={`In general, your expect to see '${title}' about ${(normalizer * 100).toFixed(2)}% of time.`}
        value={normalizerText}
        onChange={e => {
          try {
            dispatch(contentActions.setEvidenceNormalizerText({
              i: index,
              normalizerText: e.target.value
            }))
            const numericValue = parseFloat(eval(e.target.value))
            setNormalizerLocal(numericValue)
            dispatch(contentActions.setEvidenceNormalizer({
              i: index,
              normalizer: numericValue
            }))
            setEvalError(false)
          } catch (error) {
            setEvalError(true)
          }
        }}
        startChipProps={{ label: ' P ( E ) ', color: 'secondary' }}
        endChipProps={{ label: 'Normalizer', color: 'secondary' }}
      />
    </Paper>
  )
}

export default NormalizerPrompt

