import {
  Box,
  Button,
  Card, CardActions, CardContent,
  styled,
  Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from "react-redux"
import { RootState } from '../../../redux/store'
import { Overflow, Stretch, TopContent } from "../../styled/containers"
import { useDispatch } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { Evidence } from "../../../types/evidence"


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


interface EvidenceCardProps {
  index: number
}


function EvidenceCard({ index }: EvidenceCardProps) {
  const dispatch = useDispatch()

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
            dispatch(contentActions.removeEvidence(index))
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
  const evidenceItems = useSelector((s: RootState) => s.content.evidence)

  return (
    <ContentDiv id='content-ctn'>
      <HypothesisCard />
      {
        evidenceItems.map((item: Evidence, i: number) =>
          <EvidenceCard key={item.uuid} index={i} />)
      }
    </ContentDiv>
  )
}

export default Home


