import { Paper, Typography } from "@mui/material"

function NormalizerPrompt() {
  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <Typography variant="h6" sx={{ textAlign: 'left' }} color="text.secondary">Normalizing Factor:</Typography>
      <Typography variant="h5">P(H) = ?</Typography>
    </Paper>
  )
}

export default NormalizerPrompt

