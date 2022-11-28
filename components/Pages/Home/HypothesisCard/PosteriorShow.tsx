import {
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField,
} from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"


interface PosteriorShowProps {
  posteriorLocal: number
}

function PosteriorShow({ posteriorLocal }: PosteriorShowProps) {
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const evidence = useSelector((s: RootState) => s.content.evidence)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{
        m: 1,
        p: 1, pt: 4,
        bgcolor: posteriorLocal > 1 ? 'red' : null
      }}>
      <Slider
        defaultValue={0.5}
        value={posteriorLocal}
        valueLabelFormat={value => (value * 100).toFixed(2) + '%'}
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
        helperText={`After ${evidence.length} piece${evidence.length > 1 ? "s" : ""} of evidence, `
          + `the hypothesis '${title}' is true about ${(posteriorLocal * 100).toFixed(2)}% of time.`}
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label=' P ( H | E ) ' variant='filled' color='error' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Posterior' variant='filled' color='error' />
            </InputAdornment>,
        }}
        value={posteriorLocal.toFixed(4)}
      >
      </TextField>
    </Paper>
  )
}

export default PosteriorShow
