import {
  Box,
  Button,
  Card, CardActions, CardContent,
  Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useState } from "react"
import { RootState } from "../../../../redux/store"
import TitlePrompt from "./TitlePrompt"
import LikelihoodPrompt from "./LikelihoodPrompt"
import NormalizerPrompt from "./NormalizerPrompt"


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
        <TitlePrompt {...{ index }} />
        <LikelihoodPrompt />
        <NormalizerPrompt />
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

