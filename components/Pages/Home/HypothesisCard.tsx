import {
  Card, CardContent,
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField,
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../../redux/store'
import { contentActions } from "../../../redux/slices/contentSlice"
import { useEffect, useState } from "react"


function HypothesisCard() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const [priorLocal, setPriorLocal] = useState(prior)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)


  useEffect(() => {
    setPosteriorLocal(prior * 1.0)
  }, [prior])

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          variant="outlined"
          color='primary'
          label='What is your Hypothesis?'
          helperText="Make a guess or forecast about anything"
          InputProps={{
            startAdornment:
              <InputAdornment position="start" >
                <Chip label=' H ' variant='outlined' color='primary' />
              </InputAdornment>,
            endAdornment:
              <InputAdornment position="end" >
                <Chip label='Hypothesis' variant='outlined' color='info' />
              </InputAdornment>,
          }}
          value={title}
          onChange={e => dispatch(contentActions.setHypothesisTitle(e.target.value))}
          onFocus={e => e.target.select()}
        >
        </TextField>
        <Paper
          elevation={1}
          sx={{ p: 2 }}>
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
                  <Chip label='Prior Probability' variant='outlined' color='primary' />
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

        <Paper
          elevation={3}
          variant='outlined'
          sx={{ p: 2 }}>
          <Slider
            disabled
            defaultValue={0.5}
            value={posteriorLocal}
            min={0.0}
            max={1.0}
            step={0.0001}
            valueLabelDisplay='on'
          />
          <TextField
            disabled
            fullWidth
            variant="outlined"
            color='error'
            label='How does probability change after updating by evidence?'
            helperText='The probability of hypothesis after all evidence'
            InputProps={{
              startAdornment:
                <InputAdornment position="start" >
                  <Chip label=' P ( H | E ) ' variant='outlined' color='error' />
                </InputAdornment>,
              endAdornment:
                <InputAdornment position="end" >
                  <Chip label='Posterior Probability' variant='outlined' color='error' />
                </InputAdornment>,
            }}
            value={posteriorLocal}
          >
          </TextField>
        </Paper>
      </CardContent>
    </Card >
  )
}

export default HypothesisCard
