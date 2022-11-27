import {
  Button,
  Card, CardActions, CardContent,
  styled,
  Typography
} from "@mui/material"
import { Overflow, Stretch, TopContent } from "../styled/containers"


function HypothesisCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" sx={{ textAlign: 'left' }}>Posterior:</Typography>
        <Typography variant="h3">P(H|E) = 0.863746</Typography>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>Prior:</Typography>
        <Typography variant="h4">P(E) = ?</Typography>
      </CardContent>
    </Card>
  )
}


function EvidenceCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>Likelihood:</Typography>
        <Typography variant="h4">P(E|H) = ?</Typography>
        <Typography variant="h6" sx={{ textAlign: 'left' }}>Normalizing Factor:</Typography>
        <Typography variant="h5">P(H) = ?</Typography>
      </CardContent>
    </Card>
  )
}


const ContentDiv = styled(Overflow(Stretch(TopContent('div'))))`
`

function Home() {

  return (
    <ContentDiv>
      <HypothesisCard />
      <EvidenceCard />
      <EvidenceCard />
    </ContentDiv>
  )
}

export default Home


