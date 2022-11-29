import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card, CardActions, CardContent, Chip,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TitlePrompt from "./TitlePrompt"
import LikelihoodPrompt from "./LikelihoodPrompt"
import NormalizerPrompt from "./NormalizerPrompt"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"


interface EvidenceCardProps {
  i: number
}


function EvidenceCard({ i }: EvidenceCardProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[i].likelihood)
  const normalizer = useSelector((s: RootState) => s.content.evidence[i].normalizer)
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
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {(expanded) ?
            <Chip
              label={`Evidence ${i + 1}`}
              color='secondary'
            />
            :
            <Chip
              avatar={<Avatar>E{i + 1}</Avatar>}
              label={title}
              variant='outlined'
              color='secondary'
            />
          }
          <Chip
            avatar={<Avatar>x</Avatar>}
            label={(likelihood / normalizer).toFixed(4)}
            variant='outlined'
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Card
          variant='outlined'
        >
          <CardContent >
            <TitlePrompt i={i} />
            <LikelihoodPrompt i={i} />
            <NormalizerPrompt i={i} />
          </CardContent>
          <CardActions disableSpacing>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              color="error"
              startIcon={<DeleteIcon />}
              onClick={e => {
                e.stopPropagation()
                dispatch(contentActions.removeEvidence(i))
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

