import {
  Chip,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"
import ProbTextField from "../share/ProbTextField"


interface PriorPromptProps {
  priorLocal: number,
  setPriorLocal: Dispatch<SetStateAction<number>>
}

function PriorPrompt({ priorLocal, setPriorLocal }: PriorPromptProps) {
  const dispatch = useDispatch()
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const priorText = useSelector((s: RootState) => s.content.hypothesis.priorText)
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const [evalError, setEvalError] = useState(false)

  return (
    <Paper
      elevation={1}
      sx={{ p: 1 }}>
      <ProbSlider
        value={priorLocal}
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setPriorLocal(value)
        }}
        onChangeCommitted={e => {
          dispatch(contentActions.setHypothesisPriorText(priorLocal.toFixed(4)))
          dispatch(contentActions.setHypothesisPrior(priorLocal))
        }}
      />
      <ProbTextField
        error={evalError}
        label='What is the prior probability of your hypothesis?'
        helperText={`Your expect '${title}' is true about ${(prior * 100).toFixed(2)}% of time.`}
        value={priorText}
        onChange={e => {
          try {
            dispatch(contentActions.setHypothesisPriorText(e.target.value))
            const numericValue = parseFloat(eval(e.target.value))
            setPriorLocal(numericValue)
            dispatch(contentActions.setHypothesisPrior(numericValue))
            setEvalError(false)
          } catch (error) {
            setEvalError(true)
          }
        }}
        startChipProps={{ label: ' P ( H ) ', color: 'primary' }}
        endChipProps={{ label: 'Prior', color: 'primary' }}
      />
    </Paper >
  )
}

export default PriorPrompt
