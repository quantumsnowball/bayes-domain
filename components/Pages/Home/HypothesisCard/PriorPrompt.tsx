import {
  Paper,
} from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"
import ProbTextField from "../share/ProbTextField"


function PriorPrompt() {
  const dispatch = useDispatch()
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const priorText = useSelector((s: RootState) => s.content.hypothesis.priorText)
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const [valSync, setValSync] = useState(prior)

  return (
    <Paper
      elevation={1}
      sx={{ p: 1 }}>
      <ProbSlider
        value={valSync}
        onDragging={value => setValSync(value)}
        onChangeCommitted={_ => {
          dispatch(contentActions.setHypothesisPriorText(valSync.toFixed(4)))
          dispatch(contentActions.setHypothesisPrior(valSync))
        }}
      />
      <ProbTextField
        label='What is the prior probability of your hypothesis?'
        helperText={`Your expect '${title}' is true about ${(prior * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( H ) ', color: 'primary' }}
        endChipProps={{ label: 'Prior', color: 'primary' }}
        value={priorText}
        onTyping={e => {
          dispatch(contentActions.setHypothesisPriorText(e.target.value))
          const numericValue = parseFloat(eval(e.target.value))
          setValSync(numericValue)
          dispatch(contentActions.setHypothesisPrior(numericValue))
        }}
      />
    </Paper >
  )
}

export default PriorPrompt
