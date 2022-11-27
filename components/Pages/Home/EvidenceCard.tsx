import {
  Box,
  Button,
  Card, CardActions, CardContent,
  Chip,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { useState } from "react"


interface EvidenceCardProps {
  index: number
}


function EvidenceCard({ index }: EvidenceCardProps) {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)

  return (
    <Card variant='outlined'
      onClick={() => setExpanded(!expanded)}
    >
      <CardContent >
        <TextField
          fullWidth
          variant="outlined"
          color='secondary'
          label='What is your Evidence?'
          helperText="Provide anything to support your hypothesis"
          InputProps={{
            startAdornment:
              <InputAdornment
                position="start"
                sx={{ fontsize: 30 }}
              >
                <Chip label='Evidence' variant='outlined' color='secondary' />
              </InputAdornment>,
          }}
          onFocus={e => e.target.select()}
        >
        </TextField>
        <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Likelihood:</Typography>
        <Typography variant="h4">P(E|H) = ?</Typography>
        <Typography variant="h6" sx={{ textAlign: 'left' }} color="text.secondary">Normalizing Factor:</Typography>
        <Typography variant="h5">P(H) = ?</Typography>
      </CardContent>
      {
        expanded ?
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
          :
          null
      }
    </Card>
  )
}

export default EvidenceCard

