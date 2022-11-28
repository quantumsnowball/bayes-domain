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
  const [normalizerLocal, setNormalizerLocal] = useState(normalizer)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <Slider
        defaultValue={0.5}
        value={normalizerLocal}
        min={0.0}
        max={1.0}
        step={0.0001}
        valueLabelDisplay='on'
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setNormalizerLocal(value)
        }}
        onChangeCommitted={e => dispatch(contentActions.setEvidenceNormalizer({
          i: index,
          normalizer: normalizerLocal
        }))}
      />
      <TextField
        fullWidth
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
        value={normalizer}
        onChange={e => {
          const numericValue = parseFloat(e.target.value)
          setNormalizerLocal(numericValue)
          dispatch(contentActions.setEvidenceNormalizer({
            i: index,
            normalizer: numericValue
          }))
        }}
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default NormalizerPrompt

