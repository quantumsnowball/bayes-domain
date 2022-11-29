import { Paper } from "@mui/material"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"
import ProbTextField from "../share/ProbTextField"


interface LikelihoodPromptProps {
  i: number
}

function LikelihoodPrompt({ i }: LikelihoodPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const [likelihood, setLikelihood] = [
    useSelector((s: RootState) => s.content.evidence[i].likelihood),
    (val: number) => dispatch(contentActions.setEvidenceLikelihood({ i, likelihood: val }))
  ]
  const [likelihoodText, setLikelihoodText] = [
    useSelector((s: RootState) => s.content.evidence[i].likelihoodText),
    (txt: string) => dispatch(contentActions.setEvidenceLikelihoodText({ i, likelihoodText: txt }))
  ]
  const hypothesisTitle = useSelector((s: RootState) => s.content.hypothesis.title)
  const [valSync, setValSync] = useState(likelihood)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <ProbSlider
        value={valSync}
        onDragging={value => setValSync(value)}
        onChangeCommitted={_ => {
          setLikelihood(valSync)
          setLikelihoodText(valSync.toFixed(4))
        }}
      />
      <ProbTextField
        label='Probability of seeing this evidence if hypothesis is true?'
        helperText={`If hypothesis '${hypothesisTitle}' is true, your expect '${title}' is also true about ${(likelihood * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( E | H ) ', color: 'secondary' }}
        endChipProps={{ label: 'Likelihood', color: 'secondary' }}
        value={likelihoodText}
        onTyping={e => {
          setLikelihoodText(e.target.value)
          const numericValue = parseFloat(eval(e.target.value))
          setValSync(numericValue)
          setLikelihood(numericValue)
        }}
      />
    </Paper>
  )
}

export default LikelihoodPrompt
