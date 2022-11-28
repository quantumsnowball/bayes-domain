import {
  Chip,
  InputAdornment,
  Paper,
  Slider,
  TextField,
} from "@mui/material"


interface PosteriorShowProps {
  posteriorLocal: number
}

function PosteriorShow({ posteriorLocal }: PosteriorShowProps) {
  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1, pt: 2 }}>
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
              <Chip label='Posterior' variant='outlined' color='error' />
            </InputAdornment>,
        }}
        value={posteriorLocal}
      >
      </TextField>
    </Paper>
  )
}

export default PosteriorShow
