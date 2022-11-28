import {
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField
} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"


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
      <Slider
        defaultValue={0.5}
        value={normalizerLocal}
        valueLabelFormat={value => (value * 100).toFixed(2) + '%'}
        min={0.0}
        max={1.0}
        step={0.0001}
        valueLabelDisplay='on'
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
      <TextField
        fullWidth
        error={evalError}
        variant="outlined"
        color='secondary'
        label='Probability of seeing this evidence in general?'
        helperText={`In general, your expect to see '${title}' about ${(normalizer * 100).toFixed(2)}% of time.`}
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label=' P ( E ) ' variant='outlined' color='secondary' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Normalizer' variant='outlined' color='secondary' />
            </InputAdornment>,
        }}
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
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default NormalizerPrompt

