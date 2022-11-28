import { Paper, Typography } from "@mui/material"

function LikelihoodPrompt() {
  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Likelihood:</Typography>
      <Typography variant="h4">P(E|H) = ?</Typography>
    </Paper>
  )
}

export default LikelihoodPrompt
