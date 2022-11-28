import { Typography } from "@mui/material"

function LikelihoodPrompt() {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Likelihood:</Typography>
      <Typography variant="h4">P(E|H) = ?</Typography>

    </>
  )
}

export default LikelihoodPrompt
