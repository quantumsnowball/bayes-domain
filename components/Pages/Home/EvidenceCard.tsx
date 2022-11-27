import {
  Box,
  Button,
  Card, CardActions, CardContent,
  Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"


interface EvidenceCardProps {
  index: number
}


function EvidenceCard({ index }: EvidenceCardProps) {
  const dispatch = useDispatch()

  return (
    <Card variant='outlined'>
      <CardContent >
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

export default EvidenceCard

