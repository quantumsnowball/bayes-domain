import {
  Card, CardContent,
  Typography
} from "@mui/material"


function HypothesisCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" sx={{ textAlign: 'left' }} color="text.secondary">Posterior:</Typography>
        <Typography variant="h3">P(H|E) = 0.863746</Typography>
        <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Prior:</Typography>
        <Typography variant="h4">P(E) = ?</Typography>
      </CardContent>
    </Card>
  )
}

export default HypothesisCard
