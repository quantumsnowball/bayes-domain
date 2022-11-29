import { Paper, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { NormalSlider } from "../share/Slider"
import { NormalTextField } from "../share/TextField"


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
      sx={{ m: 1, p: 1, pt: 4, bgcolor: posteriorLocal > 1 ? 'red' : null }}>
      <NormalSlider value={posteriorLocal} />
      <NormalTextField
        disabled
        label='How does probability change after updating by evidence?'
        helperText={`After ${evidence.length} piece${evidence.length > 1 ? "s" : ""} of evidence, `
          + `the hypothesis '${title}' is true about ${(posteriorLocal * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( H | E ) ', variant: 'filled', color: 'error' }}
        endChipProps={{ label: 'Posterior', variant: 'filled', color: 'error' }}
        value={posteriorLocal.toFixed(4)}
      />
    </Paper>
  )
}

export default PosteriorShow
