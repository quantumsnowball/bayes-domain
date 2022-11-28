import {
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField,
} from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"


interface PriorPromptProps {
  priorLocal: number,
  setPriorLocal: Dispatch<SetStateAction<number>>
}

function PriorPrompt({ priorLocal, setPriorLocal }: PriorPromptProps) {
  const dispatch = useDispatch()
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)

  return (
    <Paper
      elevation={1}
      sx={{ p: 1 }}>
      <Slider
        defaultValue={0.5}
        value={priorLocal}
        min={0.0}
        max={1.0}
        step={0.0001}
        valueLabelDisplay='on'
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setPriorLocal(value)
        }}
        onChangeCommitted={e => dispatch(contentActions.setHypothesisPrior(priorLocal))}
      />
      <TextField
        fullWidth
        variant="outlined"
        color='primary'
        label='What is the prior probability?'
        helperText='The probability of hypothesis before any evidence'
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label=' P ( H ) ' variant='outlined' color='primary' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Prior' variant='outlined' color='primary' />
            </InputAdornment>,
        }}
        value={prior}
        onChange={e => {
          const numericValue = parseFloat(e.target.value)
          setPriorLocal(numericValue)
          dispatch(contentActions.setHypothesisPrior(numericValue))
        }}
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default PriorPrompt
