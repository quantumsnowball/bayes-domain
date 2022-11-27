import {
  Box,
  Button,
  Card, CardActions, CardContent,
  styled,
  Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from "react-redux"
import { RootState } from '../../redux/store'
import { Overflow, Stretch, TopContent } from "../styled/containers"


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



function EvidenceCard() {
  return (
    <Card variant='outlined'>
      <CardContent sx={{ minWidth: 450 }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Evidence
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Likelihood:</Typography>
        <Typography variant="h4">P(E|H) = ?</Typography>
        <Typography variant="h6" sx={{ textAlign: 'left' }} color="text.secondary">Normalizing Factor:</Typography>
        <Typography variant="h5">P(H) = ?</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="error"
          startIcon={<DeleteIcon />}
          onClick={e => {
            e.stopPropagation()
            // dispatch(contentActions.removeEntry(index))
            alert('Please delete me')
          }}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  )
}


const ContentDiv = styled(Overflow(Stretch(TopContent('div'))))`
`

function Home() {
  const evidence = useSelector((s: RootState) => s.content.evidence)

  return (
    <ContentDiv id='content-ctn'>
      <HypothesisCard />
      {
        evidence.map(() => <EvidenceCard />)
      }
    </ContentDiv>
  )
}

export default Home


