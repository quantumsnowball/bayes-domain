import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card, CardActions, CardContent,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
    <Accordion
      disableGutters
      elevation={1}
      sx={{ m: 1 }}
      expanded={expanded}
      onChange={(e, isExpanded) => {
        setExpanded(isExpanded)
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {`Evidence ${index + 1}`}
      </AccordionSummary>
      <AccordionDetails>
        <Card
          variant='outlined'
        >
          <CardContent >
            <TitlePrompt {...{ index }} />
            <LikelihoodPrompt {...{ index }} />
            <NormalizerPrompt {...{ index }} />
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
      </AccordionDetails>
    </Accordion>
  )
}

export default EvidenceCard

