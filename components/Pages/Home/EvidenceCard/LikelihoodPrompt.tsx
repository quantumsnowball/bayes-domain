import { Chip, InputAdornment, Paper, TextField } from "@mui/material"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"


interface LikelihoodPromptProps {
  index: number
}

function LikelihoodPrompt({ index }: LikelihoodPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[index].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[index].likelihood)
  const likelihoodText = useSelector((s: RootState) => s.content.evidence[index].likelihoodText)
  const hypothesisTitle = useSelector((s: RootState) => s.content.hypothesis.title)
  const [likelihoodLocal, setLikelihoodLocal] = useState(likelihood)
  const [evalError, setEvalError] = useState(false)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <ProbSlider
        value={likelihoodLocal}
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setLikelihoodLocal(value)
        }}
        onChangeCommitted={e => {
          dispatch(contentActions.setEvidenceLikelihood({
            i: index,
            likelihood: likelihoodLocal
          }))
          dispatch(contentActions.setEvidenceLikelihoodText({
            i: index,
            likelihoodText: likelihoodLocal.toFixed(4)
          }))
        }}
      />
      <TextField
        fullWidth
        error={evalError}
        variant="outlined"
        color='secondary'
        label='Probability of seeing this evidence if hypothesis is true?'
        helperText={`If hypothesis '${hypothesisTitle}' is true, your expect '${title}' is also true about ${(likelihood * 100).toFixed(2)}% of time.`}
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label=' P ( E | H ) ' variant='outlined' color='secondary' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Likelihood' variant='outlined' color='secondary' />
            </InputAdornment>,
        }}
        value={likelihoodText}
        onChange={e => {
          try {
            dispatch(contentActions.setEvidenceLikelihoodText({
              i: index,
              likelihoodText: e.target.value
            }))
            const numericValue = parseFloat(eval(e.target.value))
            setLikelihoodLocal(numericValue)
            dispatch(contentActions.setEvidenceLikelihood({
              i: index,
              likelihood: numericValue
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

export default LikelihoodPrompt
