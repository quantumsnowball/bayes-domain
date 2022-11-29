import {
  Paper,
} from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import { ProbSlider } from "../share/Slider"
import { ProbTextField } from "../share/TextField"


function PriorPrompt() {
  const dispatch = useDispatch()
  const [prior, setPrior] = [
    useSelector((s: RootState) => s.content.hypothesis.prior),
    (val: number) => dispatch(contentActions.setHypothesisPrior(val))
  ]
  const [priorText, setPriorText] = [
    useSelector((s: RootState) => s.content.hypothesis.priorText),
    (txt: string) => dispatch(contentActions.setHypothesisPriorText(txt))
  ]
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
          setPriorText(valSync.toFixed(4))
          setPrior(valSync)
        }}
      />
      <ProbTextField
        label='What is the prior probability of your hypothesis?'
        helperText={`Your expect '${title}' is true about ${(prior * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( H ) ', color: 'primary' }}
        endChipProps={{ label: 'Prior', color: 'primary' }}
        value={priorText}
        onTyping={e => {
          setPriorText(e.target.value)
          const numericValue = parseFloat(eval(e.target.value))
          setValSync(numericValue)
          setPrior(numericValue)
        }}
      />
    </Paper >
  )
}

export default PriorPrompt
