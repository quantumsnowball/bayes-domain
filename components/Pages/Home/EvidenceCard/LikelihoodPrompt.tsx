import { Chip, InputAdornment, Paper, Slider, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"


interface LikelihoodPromptProps {
  index: number
}

function LikelihoodPrompt({ index }: LikelihoodPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[index].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[index].likelihood)
  const hypothesisTitle = useSelector((s: RootState) => s.content.hypothesis.title)
  const [likelihoodLocal, setLikelihoodLocal] = useState(likelihood)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <Slider
        defaultValue={0.5}
        value={likelihoodLocal}
        min={0.0}
        max={1.0}
        step={0.0001}
        valueLabelDisplay='on'
        onChange={(event, value) => {
          if (!event.target) return
          if (Array.isArray(value)) return
          setLikelihoodLocal(value)
        }}
        onChangeCommitted={e => dispatch(contentActions.setEvidenceLikelihood({
          i: index,
          likelihood: likelihoodLocal
        }))}
      />
      <TextField
        fullWidth
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
        value={likelihood}
        onChange={e => {
          const numericValue = parseFloat(e.target.value)
          setLikelihoodLocal(numericValue)
          dispatch(contentActions.setEvidenceLikelihood({
            i: index,
            likelihood: numericValue
          }))
        }}
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default LikelihoodPrompt