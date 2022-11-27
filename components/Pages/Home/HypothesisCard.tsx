import {
  Avatar,
  Box,
  Card, CardContent,
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField,
  Typography
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../../redux/store'
import { contentActions } from "../../../redux/slices/contentSlice"
import { useState } from "react"


function HypothesisCard() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const [priorLocal, setPriorLocal] = useState(prior)

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
            onChange={e => setPriorLocal(e.target.value)}
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
              setPriorLocal(e.target.value.toString())
              dispatch(contentActions.setHypothesisPrior(e.target.value))
            }}
            onFocus={e => e.target.select()}
          >
          </TextField>
        </Paper>
        <Typography variant="h4" sx={{ textAlign: 'left' }} color="text.secondary">Posterior:</Typography>
        <Typography variant="h3">P(H|E) = 0.863746</Typography>
      </CardContent>
    </Card >
  )
}

export default HypothesisCard
